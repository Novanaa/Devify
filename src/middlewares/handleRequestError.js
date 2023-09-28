import Response from "../utils/res.js";
const response = new Response();

function handleRequestError(err, req, res, next) {
  if (err instanceof SyntaxError)
    response.badRequest(res, "Invalid JSON Format!");
  if (!err) next();
}

export default handleRequestError;
