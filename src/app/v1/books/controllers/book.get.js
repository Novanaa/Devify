import { BooksModel, booksCategories } from "../models/books.model.js";
import Response from "../../../../utils/res.js";
import validator from "validator";
const response = new Response();

export const getAllBooks = async (req, res) => {
  try {
    const { limit, skip } = req.query;
    const sort = req.query.sort == "desc" ? -1 : 1;
    const books = await BooksModel.find()
      .select(["-__v"])
      .sort({ id: sort })
      .limit(parseInt(limit))
      .skip(parseInt(skip));
    if (books.length < 1) return response.notFound(res);
    response.succes(books, "books", res);
  } catch (err) {
    response.badRequest(res);
  }
};

export const searchQueriesBooks = async (req, res) => {
  try {
    const { q } = req.query;
    const books = await BooksModel.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
      ],
    })
      .select(["-__v"])
      .sort({ id: 1 });
    response.succes(books, "books", res);
  } catch (err) {
    response.badRequest(res);
  }
};

export const getSingleBookById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!validator.isNumeric(id)) return response.unprocessable(res);
    const book = await BooksModel.findOne({ id: id }).select(["-__v"]);
    if (book == null) return response.notFound(res);
    response.succesWithSingleData(book, "book", res);
  } catch (err) {
    response.badRequest(res);
  }
};

export const getSingleBookByUniquekey = async (req, res) => {
  try {
    const { id } = req.params;
    if (!validator.isMongoId(id)) return response.unprocessable(res);
    const book = await BooksModel.findOne({ _id: id }).select(["-__v"]);
    if (book == null) return response.notFound(res);
    response.succesWithSingleData(book, "book", res);
  } catch (err) {
    response.badRequest(res);
  }
};

export const getAllBookscategories = async (req, res) => {
  res.status(200).json(booksCategories);
};

export const getSingleBookCategory = async (req, res) => {
  try {
    const category =
      {
        cosmology: booksCategories[0],
        Psychology: booksCategories[1],
        finance: booksCategories[2],
        science: booksCategories[3],
        fiction: booksCategories[4],
        nonfiction: booksCategories[5],
        history: booksCategories[6],
      }[req.params.category] || null;
    if (category == null) return response.notFound(res);
    const books = await BooksModel.find({ category: category })
      .select(["-__v"])
      .sort({ id: 1 });
    response.succes(books, "books", res);
  } catch (err) {
    response.badRequest(res);
  }
};
