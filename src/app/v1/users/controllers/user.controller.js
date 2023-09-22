import {
  getAllUsers,
  getSingleUserById,
  getSingleUserByUniquekey,
  usersSearchQueries,
} from "./user.get.js";
import addUsers from "./user.post.js";

const users = {
  getAllUsers,
  getSingleUserById,
  getSingleUserByUniquekey,
  usersSearchQueries,
  addUsers,
};

export default users;
