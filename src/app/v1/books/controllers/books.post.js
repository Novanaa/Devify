import { BooksModel } from "../models/books.model.js";
import FilesUpload from "../../../../services/FileUpload.js";
import Response from "../../../../utils/res.js";
import BooksServices from "../services/booksServices.js";
const booksServices = new BooksServices();
const response = new Response();
const filesUpload = new FilesUpload();

const addBooksData = (req, res) => {
  let url, file, fileName;
  filesUpload.post(req, res, (f, fName) => {
    file = f;
    fileName = fName;
  });
  if (req.body.image !== undefined) {
    if (file == null || file == undefined) {
      url = req.body.image;
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
