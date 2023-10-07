import Response from "../../../../utils/res.js";
import { CartsModel } from "../models/cart.model.js";
import cartsValidation from "../../../../validations/cartsValidation.js";
import createLogger from "../../../../utils/logger.js";
import validator from "validator";
const response = new Response();
const logger = createLogger();

export async function updateCartById(req, res) {
  const { id } = req.params;
  if (!validator.isNumeric(id)) return response.unprocessable(res);
  try {
    const { value } = cartsValidation.validate(req.body);
    if (value instanceof Object && Object.keys(value).length == 0)
      return response.unprocessable(res, "The fields must be filled!");
    const cart = await CartsModel.findOneAndUpdate({ id: id }, { ...value });
    if (cart == null) return response.notFound(res);
    return response.updated(res);
  } catch (err) {
    logger.error(err);
  }
}

export async function updateCartByUniquekey(req, res) {
  const { id } = req.params;
  if (!validator.isMongoId(id)) return response.unprocessable(res);
  try {
    const { value } = cartsValidation.validate(req.body);
    if (value instanceof Object && Object.keys(value).length == 0)
      return response.unprocessable(res, "The fields must be filled!");
    const cart = await CartsModel.findOneAndUpdate({ _id: id }, { ...value });
    if (!cart || cart == null) return response.notFound(res);
    return response.updated(res);
  } catch (err) {
    logger.error(err);
  }
}
