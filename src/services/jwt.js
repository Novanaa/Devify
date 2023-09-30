import "dotenv/config.js";
import jwt from "jsonwebtoken";
import process from "process";

class JsonWebToken {
  createToken = function (payload) {
    const { name = "", email = "", id = 0 } = payload;
    const { JWTACCESSTOKEN, JWTREFRESHTOKEN } = process.env;
    const accessToken = jwt.sign({ id, name, email }, JWTACCESSTOKEN, {
      expiresIn: "120s",
    });
    const refreshToken = jwt.sign({ id, name, email }, JWTREFRESHTOKEN, {
      expiresIn: "1d",
    });
    return { accessToken, refreshToken };
  };
}

export default JsonWebToken;
