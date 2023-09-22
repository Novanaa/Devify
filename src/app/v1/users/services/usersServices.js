import Response from "../../../../utils/res.js";
import createLogger from "../../../../utils/logger.js";
const logger = createLogger();
const response = new Response();

class UsersServices {
  saveUser = async function (req, res, model, url) {
    try {
      await model.insertMany({
        ...req.body,
        picture: url,
      });
      response.created(res);
    } catch (err) {
      logger.error(err);
    }
  };
}

export default UsersServices;
