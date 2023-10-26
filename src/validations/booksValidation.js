import Joi from "joi";

const booksValidation = Joi.object({
  title: Joi.string().max(200).required(),
  synopsis: Joi.string(),
  author: Joi.string().max(100).required(),
  category: Joi.string().max(50).required(),
  publisher: Joi.string(),
  published: Joi.string(),
  language: Joi.string(),
  rating: Joi.number().default(0),
  pages: Joi.number(),
  poster: Joi.string(),
});

export default booksValidation;
