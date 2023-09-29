import Response from "../utils/res.js";
const response = new Response();

function handleRequestError(err, req, res, next) {
  if (err instanceof SyntaxError)
    response.badRequest(
      res,
      "The request you made is invalid or missing required parameters. Please check your request and ensure it includes all necessary data and follows the API documentation."
    );
  if (!err) next();
}

export default handleRequestError;
