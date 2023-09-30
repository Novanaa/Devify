import { UsersModel } from "../../users/models/user.model.js";
import Response from "../../../../utils/res.js";
import Bcrypt from "../../../../services/bcrypt.js";
import createLogger from "../../../../utils/logger.js";
import usersValidation from "../../../../validations/usersValidation.js";
import loginUser from "../services/loginUser.js";
import validations from "../../../../services/validations.js";
import JsonWebToken from "../../../../services/jwt.js";
const jwt = new JsonWebToken();
const response = new Response();
const logger = createLogger();
const bcrypt = new Bcrypt();

async function login(req, res) {
  const { error, value } = usersValidation.validate(req.body);
  if (error || Object.keys(value).length == 0)
    return validations(value, error, res);
  const { name: userInputName, password: userInputPassword } = value;
  const user = await UsersModel.find({
    name: userInputName,
  }).select(["id", "email", "name", "password"]);
  try {
    if (user.length < 1)
      return response.unauth(
        res,
        "Invalid Login Credentials, The login information you provided is incorrect."
      );
    const { name = "", email = "", id = 0, password = "" } = user[0];
    const passPatern = /^\$2[aby]\$[0-9]{2}\$[./A-Za-z0-9]{53}$/;
    const { accessToken, refreshToken } = jwt.createToken({ name, email, id });
    if (!passPatern.test(password)) {
      if (userInputPassword !== password)
        return response.unprocessable(res, "The password does not match");
      loginUser(UsersModel, id, accessToken, refreshToken, res);
    }
    if (passPatern.test(password)) {
      const comparedPassword = bcrypt.compare(userInputPassword, password);
      if (!comparedPassword)
        return response.unprocessable(res, "The password does not match");
      loginUser(UsersModel, id, accessToken, refreshToken, res);
    }
  } catch (err) {
    logger.error(err);
  }
}

export default login;
