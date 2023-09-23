import { UsersModel } from "../models/user.model.js";
import validator from "validator";
import FilesUpload from "../../../../services/FileUpload.js";
import createLogger from "../../../../utils/logger.js";
import Response from "../../../../utils/res.js";
import picturePath from "../services/picturePath.js";
import UsersServices from "../services/usersServices.js";
const fileUpload = new FilesUpload();
const response = new Response();
const usersServices = new UsersServices();
const logger = createLogger();

export const updateUserById = async (req, res) => {
  let url, fName;
  const { id } = req.params;
  if (!validator.isNumeric(id)) return response.unprocessable(res);
  const srcPath = await picturePath("id", id, UsersModel);
  if (req.files !== null) {
    try {
      fileUpload.patch(req, res, (file, fileName) => {
        fName = fileName;
        url = `${req.protocol}://${req.get(
          "host"
        )}/img/users/pictures/${fileName}`;
        const urlPath = `./public/img/users/pictures/${fileName}`;
        file?.mv(urlPath, (err) => {
          if (err) return response.unprocessable(res);
          usersServices.updateUser({
            req,
            res,
            model: UsersModel,
            key: "id",
            id,
            url,
            srcPath,
            fileName,
          });
        });
      });
    } catch (err) {
      logger.error(err);
    }
  }
  if (req.files == null) {
    url = req.body.picture || req.body.image;
    usersServices.updateUser({
      req,
      res,
      model: UsersModel,
      key: "id",
      id,
      url,
      srcPath,
      fileName: fName,
    });
  }
};

export const updateUserByUniquekey = async (req, res) => {
  let url, fName;
  const { id } = req.params;
  if (!validator.isMongoId(id)) return response.unprocessable(res);
  const srcPath = await picturePath("_id", id, UsersModel);
  if (req.files !== null) {
    try {
      fileUpload.patch(req, res, (file, fileName) => {
        fName = fileName;
        url = `${req.protocol}://${req.get(
          "host"
        )}/img/users/pictures/${fileName}`;
        const urlPath = `./public/img/users/pictures/${fileName}`;
        file?.mv(urlPath, (err) => {
          if (err) return response.unprocessable(res);
          usersServices.updateUser({
            req,
            res,
            model: UsersModel,
            key: "_id",
            id,
            url,
            srcPath,
            fileName,
          });
        });
      });
    } catch (err) {
      logger.error(err);
    }
  }
  if (req.files == null) {
    url = req.body.picture || req.body.image;
    usersServices.updateUser({
      req,
      res,
      model: UsersModel,
      key: "_id",
      id,
      url,
      srcPath,
      fileName: fName,
    });
  }
};