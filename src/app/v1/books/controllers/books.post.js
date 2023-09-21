import { BooksModel } from "../models/books.model.js";
import FilesUpload from "../../../../services/FileUpload.js";
import Response from "../../../../utils/res.js";
import BooksServices from "../services/BooksServices.js";
import createLogger from "../../../../utils/logger.js";
const logger = createLogger();
const booksServices = new BooksServices();
const response = new Response();
const filesUpload = new FilesUpload();

const addBooksData = (req, res) => {
  let url, file, fileName;
  try {
    filesUpload.post(req, res, (f, fName) => {
      file = f;
      fileName = fName;
    });
  } catch (err) {
    logger.error(err);
  }
  if (
    req.body.image == undefined &&
    file == null &&
    req.body.poster == undefined
  ) {
    response.unprocessable(res, "The image field must be filled");
  }
  if (req.body.image !== undefined && req.body.poster == undefined) {
    if (file == null || file == undefined) {
      url = req.body.image;
      booksServices.saveBooks(req, res, BooksModel, url);
    }
  }
  if (req.body.poster !== undefined && req.body.image == undefined) {
    if (file == null || file == undefined) {
      url = req.body.poster;
      booksServices.saveBooks(req, res, BooksModel, url);
    }
  }
  if (file !== undefined || file !== null || req.files.image.length < 2) {
    const filePath = `./public/img/books/poster/${fileName}`;
    url = `${req.protocol}://${req.get("host")}/img/books/poster/${fileName}`;
    file?.mv(filePath, async (err) => {
      if (err) return response.unprocessable(res);
      booksServices.saveBooks(req, res, BooksModel, url);
    });
  }
};

export default addBooksData;
