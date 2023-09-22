import {
  getAllUsers,
  getSingleUserById,
  getSingleUserByUniquekey,
  usersSearchQueries,
} from "./user.get.js";
import addUsers from "./user.post.js";
import { deleteUserById, deleteUserByUniquekey } from "./user.delete.js";

const users = {
  getAllUsers,
  getSingleUserById,
  getSingleUserByUniquekey,
  usersSearchQueries,
  addUsers,
  deleteUserById,
  deleteUserByUniquekey,
};

export default users;
