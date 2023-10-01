import { CartsModel } from "../models/cart.model.js";
import validator from "validator";
import Response from "../../../../utils/res.js";
const response = new Response();

export async function getAllCarts(req, res) {
  try {
    const { limit, skip } = req.query;
    const sort = req.query.sort == "desc" ? -1 : 1;
    const carts = await CartsModel.find()
      .select(["-__v"])
      .sort({ id: sort })
      .limit(parseInt(limit))
      .skip(parseInt(skip));
    if (carts.length < 1) return response.notFound(res);
    response.succes(carts, "carts", res);
  } catch (err) {
    response.badRequest(res);
  }
}

export async function getSingleCartsById(req, res) {
  try {
    const { id } = req.params;
    if (!validator.isNumeric(id))
      return response.unprocessable(res, "The request userId must be a number");
    const cart = await CartsModel.findOne({ userId: id }).select(["-__v"]);
    if (cart == null) return response.notFound(res);
    return response.succesWithSingleData(cart, "cart", res);
  } catch (err) {
    response.badRequest(res);
  }
}
