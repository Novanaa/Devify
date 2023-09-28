import bcrypt from "bcrypt";
import createLogger from "../utils/logger.js";
const logger = createLogger();

class Bcrypt {
  hash = function (str = "") {
    try {
      const salt = bcrypt.genSaltSync(12);
      const hash = bcrypt.hashSync(str, salt);
      return hash;
    } catch (err) {
      logger.error(err);
      return null;
    }
  };
  compare = function (userPassword, password) {
    try {
      const passwordCompare = bcrypt.compareSync(userPassword, password);
      return passwordCompare;
    } catch (err) {
      logger.error(err);
      return null;
    }
  };
}

export default Bcrypt;
