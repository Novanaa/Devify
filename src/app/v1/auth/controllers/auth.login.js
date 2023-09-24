import { UsersModel } from "../../users/models/user.model.js";
import Response from "../../../../utils/res.js";
import Bcrypt from "../../../../services/bcrypt.js";
import createLogger from "../../../../utils/logger.js";
import JsonWebToken from "../../../../services/jwt.js";
const jwt = new JsonWebToken();
const response = new Response();
const logger = createLogger();
const bcrypt = new Bcrypt();

async function login(req, res) {
  const { name, password: userInputPassword, email: userInputEmail } = req.body;
  const user = await UsersModel.find({
    name: name,
  }).select(["id", "email", "name", "password"]);
  try {
    if (user.length < 1)
      return response.notFound(
        res,
        "Invalid Login Credentials, The login information you provided is incorrect."
      );
    const { name = "", email = "", id = 0, password = "" } = user[0];
    if (userInputPassword == "" || userInputPassword == undefined)
      return response.unprocessable(res, "The password field must be filled");
    if (userInputEmail == "" || userInputEmail == undefined)
      return response.unprocessable(res, "The email field must be filled");
    if (userInputEmail !== email)
      return response.unprocessable(res, "The email does not match");
    const comparedPassword = bcrypt.compare(userInputPassword, password);
    if (!comparedPassword)
      return response.unprocessable(res, "The password does not match ");
    const { accessToken, refreshToken } = jwt.createToken({ name, email, id });
    await UsersModel.findOneAndUpdate(
      { id: id },
      { refresh_token: refreshToken }
    );
    response.onLoginSuccess(res, accessToken);
  } catch (err) {
    logger.error(err);
  }
}

export default login;
