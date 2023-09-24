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
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  picture: {
    type: String,
  },
  address: {
    city: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  refresh_token: {
    type: String,
  },
});

// convert _id to uniquekey
uniquekey(UsersSchema);

// Users Model
export const UsersModel = mongoose.model("users", UsersSchema);
