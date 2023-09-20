import {
  getAllBooks,
  getSingleBookById,
  getSingleBookByUniquekey,
  searchQueriesBooks,
  getAllBookscategories,
  getSingleBookCategory,
} from "./book.get.js";
import addBooksData from "./books.post.js";

const books = {
  getAllBooks,
  getSingleBookById,
  getSingleBookByUniquekey,
  searchQueriesBooks,
  getAllBookscategories,
  getSingleBookCategory,
  addBooksData,
};

export default books;
