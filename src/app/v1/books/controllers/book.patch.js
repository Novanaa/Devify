import validator from "validator";
import { BooksModel } from "../models/books.model.js";
import FilesUpload from "../../../../services/FileUpload.js";
import Response from "../../../../utils/res.js";
import createLogger from "../../../../utils/logger.js";
import posterPath from "../services/posterPath.js";
import BooksServices from "../services/BooksServices.js";
const booksServices = new BooksServices();
const response = new Response();
const filesUpload = new FilesUpload();
const logger = createLogger();

export const updateBookById = async (req, res) => {
  let url, fName;
  const { id } = req.params;
  if (!validator.isNumeric(id)) return response.unprocessable(res);
  const srcPath = await posterPath("id", id, BooksModel);
  if (req.files !== null) {
    try {
      filesUpload.patch(req, res, (file, fileName) => {
        fName = fileName;
        url = `${req.protocol}://${req.get(
          "host"
        )}/img/books/poster/${fileName}`;
        const filePath = `./public/img/books/poster/${fileName}`;
        file?.mv(filePath, async (err) => {
          if (err) return response.unprocessable(res);
          await booksServices.updateBooks({
            req,
            res,
            model: BooksModel,
            key: "id",
            id,
            url,
            srcPath,
            fileName,
          });
        });
      });
    } catch (err) {
      logger.error(err);
    }
  }
  if (req.files == null) {
    url = req.body.poster || req.body.image;
    booksServices.updateBooks({
      req,
      res,
      model: BooksModel,
      key: "id",
      id,
      url,
      srcPath,
      fileName: fName,
    });
  }
};

export const updateBookUniquekey = async (req, res) => {
  let url, fName;
  const { id } = req.params;
  if (!validator.isMongoId(id)) return response.unprocessable(res);
  const srcPath = await posterPath("_id", id, BooksModel);
  if (req.files !== null) {
    try {
      filesUpload.patch(req, res, (file, fileName) => {
        fName = fileName;
        url = `${req.protocol}://${req.get(
          "host"
        )}/img/books/poster/${fileName}`;
        const filePath = `./public/img/books/poster/${fileName}`;
        file?.mv(filePath, async (err) => {
          if (err) return response.unprocessable(res);
          await booksServices.updateBooks({
            req,
            res,
            model: BooksModel,
            key: "_id",
            id,
            url,
            srcPath,
            fileName,
          });
        });
      });
    } catch (err) {
      logger.error(err);
    }
  }
  if (req.files == null) {
    url = req.body.poster || req.body.image;
    booksServices.updateBooks({
      req,
      res,
      model: BooksModel,
      key: "_id",
      id,
      url,
      srcPath,
      fileName: fName,
    });
  }
};
