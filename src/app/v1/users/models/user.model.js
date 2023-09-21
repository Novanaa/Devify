import mongoose from "mongoose";
import uniquekey from "../../../../utils/uniquekey.js";

// Users Schema
const UsersSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  name: {
    type: String,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    minlength: 5,
  },
  gender: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
    min: 0,
  },
  picture: {
    type: String,
    trim: true,
  },
  address: {
    city: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// convert _id to uniquekey
uniquekey(UsersSchema);

// Users Model
export const UsersModel = mongoose.model("users", UsersSchema);
