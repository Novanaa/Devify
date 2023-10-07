import validator from "validator";
import { BooksModel } from "../models/books.model.js";
import FileSystem from "../../../../services/FilesSystem.js";
import posterPath from "../services/posterPath.js";
import Response from "../../../../utils/res.js";
import createLogger from "../../../../utils/logger.js";
const logger = createLogger();
const response = new Response();
const fileSystem = new FileSystem();

export const deleteBookById = async (req, res) => {
  const { id } = req.params;
  if (!validator.isNumeric(id)) return response.unprocessable(res);
  const srcPath = await posterPath("id", id, BooksModel);
  try {
    const book = await BooksModel.findOneAndDelete({ id: id });
    if (book == null) return response.notFound(res);
    fileSystem.deleteFile(srcPath);
    response.deleted(res);
  } catch (err) {
    logger.error(err);
    response.badRequest(res);
  }
};

export const deleteBookByUniquekey = async (req, res) => {
  const { id } = req.params;
  if (!validator.isMongoId(id)) return response.unprocessable(res);
  const srcPath = await posterPath("_id", id, BooksModel);
  try {
    const book = await BooksModel.findOneAndDelete({ _id: id });
    if (book == null) return response.notFound(res);
    fileSystem.deleteFile(srcPath);
    response.deleted(res);
  } catch (err) {
    logger.error(err);
    response.badRequest(res);
  }
};
