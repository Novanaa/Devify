import mongoose from "mongoose";

const QueriesShcema = new mongoose.Schema({
  title: {
    type: String,
  },
  alt: {
    type: String,
  },
  tags: {
    type: String,
  },
  method: {
    type: String,
  },
});

export const QueriesModel =
  mongoose.models.queries || mongoose.model("queries", QueriesShcema);
