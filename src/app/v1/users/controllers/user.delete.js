import validator from "validator";
import Response from "../../../../utils/res.js";
import FileSystem from "../../../../services/FilesSystem.js";
import picturePath from "../services/picturePath.js";
import { UsersModel } from "../models/user.model.js";
import createLogger from "../../../../utils/logger.js";
const logger = createLogger();
const fileSystem = new FileSystem();
const response = new Response();

export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  if (!validator.isNumeric(id)) return response.unprocessable(res);
  const srcPath = await picturePath("id", id, UsersModel);
  try {
    const user = await UsersModel.findOneAndDelete({ id: id });
    if (user == null) return response.notFound(res);
    fileSystem.deleteFile(srcPath);
    response.deleted(res);
  } catch (err) {
    logger.error(err);
    response.badRequest(res);
  }
};

export const deleteUserByUniquekey = async (req, res) => {
  const { id } = req.params;
  if (!validator.isMongoId(id)) return response.unprocessable(res);
  const srcPath = await picturePath("_id", id, UsersModel);
  try {
    const user = await UsersModel.findOneAndDelete({ _id: id });
    if (user == null) return response.notFound(res);
    fileSystem.deleteFile(srcPath);
    response.deleted(res);
  } catch (err) {
    logger.error(err);
    response.badRequest(res);
  }
};
