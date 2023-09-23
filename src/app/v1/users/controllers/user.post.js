import FilesUpload from "../../../../services/FileUpload.js";
import createLogger from "../../../../utils/logger.js";
import Response from "../../../../utils/res.js";
import { UsersModel } from "../models/user.model.js";
import UsersServices from "../services/usersServices.js";
import userFieldValidation from "../services/userFieldValidation.js";
import validator from "validator";
const usersServices = new UsersServices();
const logger = createLogger();
const response = new Response();
const filesUpload = new FilesUpload();

async function addUsers(req, res) {
  let file, fileName, url;
  if (
    req.body.image == undefined &&
    file == null &&
    req.body.picture == undefined &&
    req.files?.image == undefined
  )
    return response.unprocessable(res, "The image field must be filled");
  if (req.body.name == undefined)
    return response.unprocessable(res, "The name field must be filled");
  const username = await userFieldValidation(UsersModel);
  if (validator.isIn(req.body.name || "", username))
    return response.unprocessable(res, "The username is already taken");
  try {
    filesUpload.post(req, res, (f, fName) => {
      file = f;
      fileName = fName;
    });
  } catch (err) {
    logger.error(err);
  }
  if (req.body.image !== undefined && req.body.picture == undefined) {
    if (file == null || file == undefined) {
      url = req.body.image;
      usersServices.saveUser(req, res, UsersModel, url);
    }
  }
  if (req.body.picture !== undefined && req.body.image == undefined) {
    if (file == null || file == undefined) {
      url = req.body.picture;
      usersServices.saveUser(req, res, UsersModel, url);
    }
  }
  if (file !== undefined || file !== null || req.files.image.length < 2) {
    const filePath = `./public/img/users/pictures/${fileName}`;
    url = `${req.protocol}://${req.get("host")}/img/users/pictures/${fileName}`;
    file?.mv(filePath, async (err) => {
      if (err) return response.unprocessable(res);
      await usersServices.saveUser(req, res, UsersModel, url);
    });
  }
}

export default addUsers;
