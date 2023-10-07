import Response from "../utils/res.js";
const response = new Response();

function validations(value = {}, error = undefined, res) {
  if (value instanceof Object && Object.keys(value).length == 0)
    return response.unprocessable(res, "The fields must be filled!");
  const msgError = error?.details[0].message;
  if (error) return response.badRequest(res, msgError);
}

export default validations;
