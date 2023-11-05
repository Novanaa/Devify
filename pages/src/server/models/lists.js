import mongoose from "mongoose";

const ListsSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  title: String,
  items: [
    {
      itemsId: Number,
      title: String,
      url: String,
    },
  ],
});

export const ListsModel =
  mongoose.models.docs_nav_lists ||
  mongoose.model("docs_nav_lists", ListsSchema);
