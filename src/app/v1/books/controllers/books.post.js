import { BooksModel } from "../models/books.model.js";
import FilesUpload from "../../../../services/FileUpload.js";
import booksValidation from "../../../../validations/booksValidation.js";
import validations from "../../../../services/validations.js";
import Response from "../../../../utils/res.js";
import BooksServices from "../services/BooksServices.js";
import createLogger from "../../../../utils/logger.js";
const logger = createLogger();
const booksServices = new BooksServices();
const response = new Response();
const filesUpload = new FilesUpload();

const addBooksData = (req, res) => {
  let url, file, fileName;
  const { error, value } = booksValidation.validate(req.body);
  if (error || Object.keys(value).length == 0)
    return validations(value, error, res);
  if (value.image == undefined && file == null && value.poster == undefined)
    return response.unprocessable(res, "The image field must be filled");
  try {
    filesUpload.post(req, res, (f, fName) => {
      file = f;
      fileName = fName;
    });
  } catch (err) {
    logger.error(err);
  }
  if (value.image !== undefined && value.poster == undefined) {
    if (file == null || file == undefined) {
      url = value.image;
      booksServices.saveBooks(req, res, BooksModel, url, value);
    }
  }
  if (value.poster !== undefined && value.image == undefined) {
    if (file == null || file == undefined) {
      url = value.poster;
      booksServices.saveBooks(req, res, BooksModel, url, value);
    }
  }
  if (file !== undefined || file !== null || req.files.image.length < 2) {
    const filePath = `./public/img/books/poster/${fileName}`;
    url = `${req.protocol}://${req.get("host")}/img/books/poster/${fileName}`;
    file?.mv(filePath, async (err) => {
      if (err) return response.unprocessable(res);
      booksServices.saveBooks(req, res, BooksModel, url, value);
    });
  }
};

export default addBooksData;
