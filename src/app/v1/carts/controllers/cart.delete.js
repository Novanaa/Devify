import Response from "../../../../utils/res.js";
import { CartsModel } from "../models/cart.model.js";
import validator from "validator";
const response = new Response();

export async function deleteCartById(req, res) {
  const { id } = req.params;
  if (!validator.isNumeric(id)) return response.unprocessable(res);
  try {
    const cart = await CartsModel.findOneAndDelete({ id: id });
    if (cart == null) return response.notFound(res);
    response.deleted(res);
  } catch (err) {
    response.badRequest(res);
  }
}

export async function deleteCartByUniquekey(req, res) {
  const { id } = req.params;
  if (!validator.isMongoId(id)) return response.unprocessable(res);
  try {
    const cart = await CartsModel.findOneAndDelete({ _id: id });
    if (cart == null) return response.notFound(res);
    response.deleted(res);
  } catch (err) {
    response.badRequest(res);
  }
}
