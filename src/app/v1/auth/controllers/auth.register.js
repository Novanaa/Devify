import validator from "validator";
import Bcrypt from "../../../../services/bcrypt.js";
import FilesUpload from "../../../../services/FileUpload.js";
import createLogger from "../../../../utils/logger.js";
import Response from "../../../../utils/res.js";
import { UsersModel } from "../../users/models/user.model.js";
import UsersServices from "../../users/services/usersServices.js";
import userFieldValidation from "../../users/services/userFieldValidation.js";
import usersValidation from "../../../../validations/usersValidation.js";
const usersServices = new UsersServices();
const logger = createLogger();
const response = new Response();
const filesUpload = new FilesUpload();
const bcrypt = new Bcrypt();

async function register(req, res) {
  let file, fileName, url;
  const { error, value } = usersValidation.validate(req.body);
  const { name, password, email } = value;
  if (error) return response.badRequest(res, error?.details[0].message);
  const hashedPassword = bcrypt.hash(password);
  try {
    const username = await userFieldValidation(UsersModel);
    if (validator.isIn(name || "", username))
      return response.unprocessable(res, "The username is already taken");
    if (
      req.body.image == undefined &&
      file == null &&
      req.body.picture == undefined &&
      req.files?.image == undefined
    )
      return response.unprocessable(res, "The image field must be filled");
    if (!validator.isEmail(email))
      return response.unprocessable(
        res,
        "Invalid Email Format, The email address you entered does not appear to be in a valid email format. Please make sure you have entered a valid email address (e.g., example@email.com) and try again."
      );
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
        usersServices.saveUser(req, res, UsersModel, url, hashedPassword);
      }
    }
    if (req.body.picture !== undefined && req.body.image == undefined) {
      if (file == null || file == undefined) {
        url = req.body.picture;
        usersServices.saveUser(req, res, UsersModel, url, hashedPassword);
      }
    }
    if (file !== undefined || file !== null || req.files.image.length < 2) {
      const filePath = `./public/img/users/pictures/${fileName}`;
      url = `${req.protocol}://${req.get(
        "host"
      )}/img/users/pictures/${fileName}`;
      file?.mv(filePath, async (err) => {
        if (err) return response.unprocessable(res);
        await usersServices.saveUser(req, res, UsersModel, url, hashedPassword);
      });
    }
  } catch (err) {
    logger.error(err);
  }
}

export default register;
