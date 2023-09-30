import { UsersModel } from "../models/user.model.js";
import Response from "../../../../utils/res.js";
import validator from "validator";
const response = new Response();

export const getAllUsers = async (req, res) => {
  try {
    const { limit, skip } = req.query;
    const sort = req.query.sort == "desc" ? -1 : 1;
    const users = await UsersModel.find()
      .select(["-__v"])
      .sort({ id: sort })
      .limit(parseInt(limit))
      .skip(parseInt(skip));
    if (users.length < 1) return response.notFound(res);
    response.succes(users, "users", res);
  } catch (err) {
    response.badRequest(res);
  }
};

export const usersSearchQueries = async (req, res) => {
  try {
    const { q } = req.query;
    const users = await UsersModel.find({
      $or: [{ name: { $regex: q, $options: "i" } }],
    })
      .select(["-__v"])
      .sort({ id: 1 });
    response.succes(users, "users", res);
  } catch (err) {
    response.badRequest(res);
  }
};

export const getSingleUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!validator.isNumeric(id)) return response.unprocessable(res);
    const user = await UsersModel.findOne({ id: id }).select(["-__v"]);
    if (user == null) return response.notFound(res);
    response.succesWithSingleData(user, "user", res);
  } catch (err) {
    response.badRequest(res);
  }
};

export const getSingleUserByUniquekey = async (req, res) => {
  try {
    const { id } = req.params;
    if (!validator.isMongoId(id)) return response.unprocessable(res);
    const user = await UsersModel.findOne({ _id: id }).select(["-__v"]);
    if (user == null) return response.notFound(res);
    response.succesWithSingleData(user, "user", res);
  } catch (err) {
    response.badRequest(res);
  }
};
