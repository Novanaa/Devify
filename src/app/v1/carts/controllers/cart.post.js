import { CartsModel } from "../models/cart.model.js";
import Response from "../../../../utils/res.js";
import cartsValidation from "../../../../validations/cartsValidation.js";
import validations from "../../../../services/validations.js";
const response = new Response();

async function addCarts(req, res) {
  try {
    const { error, value } = cartsValidation.validate(req.body);
    if (error || Object.keys(value).length == 0)
      return validations(value, error, res);
    const carts = await CartsModel.find();
    await CartsModel.insertMany({ ...value, id: carts.length + 1 });
    return response.created(res);
  } catch (err) {
    response.badRequest(res);
  }
}

export default addCarts;
