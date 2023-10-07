import {
  getAllUsers,
  getSingleUserById,
  getSingleUserByUniquekey,
  usersSearchQueries,
} from "./user.get.js";
import { deleteUserById, deleteUserByUniquekey } from "./user.delete.js";
import { updateUserById, updateUserByUniquekey } from "./user.patch.js";

const users = {
  getAllUsers,
  getSingleUserById,
  getSingleUserByUniquekey,
  usersSearchQueries,
  updateUserById,
  updateUserByUniquekey,
  deleteUserById,
  deleteUserByUniquekey,
};

export default users;
