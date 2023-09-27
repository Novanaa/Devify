import jwt from "jsonwebtoken";
import Response from "../utils/res.js";
import { JWTACCESSTOKEN } from "../const/config.js";
import createLogger from "../utils/logger.js";
const logger = createLogger();
const response = new Response();

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  try {
    const token = authHeader && authHeader.split(" ")[1];
    if (token == undefined) return response.unauth(res);
    jwt.verify(token, JWTACCESSTOKEN, (err, decoded) => {
      if (err) return response.unauth(res);
      req.decode = decoded;
      next();
    });
  } catch (err) {
    logger.error(err);
  }
}

export default verifyToken;
