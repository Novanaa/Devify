import { UsersModel } from "../../users/models/user.model.js";
import Response from "../../../../utils/res.js";
import Bcrypt from "../../../../services/bcrypt.js";
import createLogger from "../../../../utils/logger.js";
import usersValidation from "../../../../validations/usersValidation.js";
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
    const comparedPassword = bcrypt.compare(userInputPassword, password);
    if (!comparedPassword)
      return response.unprocessable(res, "The password does not match");
    const { accessToken, refreshToken } = jwt.createToken({ name, email, id });
    await UsersModel.findOneAndUpdate(
      { id: id },
      { refresh_token: refreshToken }
    );
    res.cookie("refreshToken", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
      httpOnly: true,
    });
    response.onLoginSuccess(res, accessToken);
  } catch (err) {
    logger.error(err);
  }
}

export default login;
