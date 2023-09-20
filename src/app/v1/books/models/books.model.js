import mongoose from "mongoose";
import uniquekey from "../../../../utils/uniquekey.js";

// Defined Books Schemas
const BooksSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  title: {
    type: String,
  },
  synopsis: {
    type: String,
  },
  author: {
    type: String,
  },
  category: {
    type: String,
  },
  publisher: {
    type: String,
  },
  published: {
    type: String,
  },
  language: {
    type: String,
  },
  rating: {
    type: Number,
  },
  pages: {
    type: Number,
  },
  poster: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

// Convert _id fields name to uniquekey
uniquekey(BooksSchema);

// Books Categories List
export const booksCategories = [
  "Cosmology",
  "Psychology",
  "Finance",
  "Science",
  "Fiction",
  "Non-fiction",
  "History",
];

// Books Model
export const BooksModel = mongoose.model("books", BooksSchema);
