import validator from "validator";
import { UsersModel } from "../models/user.model.js";
import Bcrypt from "../../../../services/bcrypt.js";
import FilesUpload from "../../../../services/FileUpload.js";
import createLogger from "../../../../utils/logger.js";
import Response from "../../../../utils/res.js";
import picturePath from "../services/picturePath.js";
import usersValidations from "../../../../validations/usersValidation.js";
import validations from "../../../../services/validations.js";
import UsersServices from "../services/usersServices.js";
const fileUpload = new FilesUpload();
const response = new Response();
const usersServices = new UsersServices();
const bcrypt = new Bcrypt();
const logger = createLogger();

export const updateUserById = async (req, res) => {
  let url, fName;
  const { id } = req.params;
  const { error, value } = usersValidations.validate(req.body);
  if (error || Object.keys(value).length == 0)
    return validations(value, error, res);
  const { password, image, picture } = value;
  const hashedPassword = bcrypt.hash(password);
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
            password: hashedPassword,
            value,
          });
        });
      });
    } catch (err) {
      logger.error(err);
    }
  }
  if (req.files == null) {
    url = picture || image;
    usersServices.updateUser({
      req,
      res,
      model: UsersModel,
      key: "id",
      id,
      url,
      srcPath,
      fileName: fName,
      password: hashedPassword,
      value,
    });
  }
};

export const updateUserByUniquekey = async (req, res) => {
  let url, fName;
  const { id } = req.params;
  const { error, value } = usersValidations.validate(req.body);
  if (error || Object.keys(value).length == 0)
    return validations(value, error, res);
  const { password, image, picture } = value;
  const hashedPassword = bcrypt.hash(password);
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
            password: hashedPassword,
            value,
          });
        });
      });
    } catch (err) {
      logger.error(err);
    }
  }
  if (req.files == null) {
    url = picture || image;
    usersServices.updateUser({
      req,
      res,
      model: UsersModel,
      key: "_id",
      id,
      url,
      srcPath,
      fileName: fName,
      password: hashedPassword,
      value,
    });
  }
};
