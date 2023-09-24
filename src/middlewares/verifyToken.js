// import jwt from "jsonwebtoken";
import validator from "validator";
import Response from "../utils/res.js";
import createLogger from "../utils/logger.js";
const logger = createLogger();
const response = new Response();

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  try {
    const token = authHeader.split(" ")[1];
    if (!validator.isJWT(token)) return response.badRequest(res);
    console.log(token);
    next();
  } catch (err) {
    logger.error(err);
    next();
  }
}

export default verifyToken;
