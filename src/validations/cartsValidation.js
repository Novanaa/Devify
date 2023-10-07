import Joi from "joi";

const cartsValidation = Joi.object({
  userId: Joi.number().required(),
  products: Joi.array()
    .items(
      Joi.object({
        productsId: Joi.number().required(),
        quantity: Joi.number().required(),
        price: Joi.number().required(),
      })
    )
    .required(),
  total: Joi.number(),
  delivery_cost: Joi.number(),
  free_delivery: Joi.boolean(),
  total_products: Joi.number(),
  tax: Joi.number(),
});

export default cartsValidation;
