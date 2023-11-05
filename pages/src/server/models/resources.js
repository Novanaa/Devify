import mongoose from "mongoose";

const ResourcesShema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    required: true,
    type: String,
  },
  total: {
    required: true,
    type: Number,
  },
  url: {
    required: true,
    type: String,
  },
  poster: {
    required: true,
    type: String,
  },
});

export const ResourcesModel =
  mongoose.models.resources || mongoose.model("resources", ResourcesShema);
