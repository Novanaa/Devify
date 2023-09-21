import {
  getAllBooks,
  getSingleBookById,
  getSingleBookByUniquekey,
  searchQueriesBooks,
  getAllBookscategories,
  getSingleBookCategory,
} from "./book.get.js";
import addBooksData from "./books.post.js";
import { deleteBookById, deleteBookByUniquekey } from "./book.delete.js";
import { updateBookById, updateBookUniquekey } from "./book.patch.js";

const books = {
  getAllBooks,
  getSingleBookById,
  getSingleBookByUniquekey,
  searchQueriesBooks,
  getAllBookscategories,
  getSingleBookCategory,
  addBooksData,
  updateBookById,
  updateBookUniquekey,
  deleteBookById,
  deleteBookByUniquekey,
};

export default books;
