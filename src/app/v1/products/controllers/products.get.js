import { ProductsModel, productsCategories } from "../models/products.model.js";
import Response from "../../../../utils/res.js";
import categories from "../../../../services/categories.js";
const response = new Response();

//* GET Products Controllers
//* GET All Products Datas
export const getAllProducts = async (req, res) => {
  try {
    const { limit, skip } = req.query;
    const sort = req.query.sort == "desc" ? -1 : 1;
    const products = await ProductsModel.find()
      .select(["-__v"])
      .sort({ id: sort })
      .limit(parseInt(limit))
      .skip(parseInt(skip));
    if (products.length < 1) return response.notFound(res);
    response.succes(products, "products", res);
  } catch (err) {
    response.badRequest(res);
  }
};

//* GET Single Product Data
export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductsModel.findOne({ id: parseInt(id) }).select([
      "-__v",
    ]);
    if (product == null) return response.notFound(res);
    response.succesWithSingleData(product, "product", res);
  } catch (err) {
    response.badRequest(res);
  }
};

//* GET Single Product Data by Uniquekey
export const getSingleProductByUniquekey = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductsModel.findOne({ _id: id }).select(["-__v"]);
    if (product == null) return response.notFound(res);
    response.succesWithSingleData(product, "product", res);
  } catch (err) {
    response.badRequest(res);
  }
};

//* Search Queries Products Datas
export const searchQueriesProducts = async (req, res) => {
  try {
    const { q } = req.query;
    const products = await ProductsModel.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
      ],
    })
      .select(["-__v"])
      .sort({ id: 1 });
    response.succes(products, "products", res);
  } catch (err) {
    response.badRequest(res);
  }
};

//* GET Products Categories
//* GET All Products Categories
export const getAllProductsCaegories = (req, res) => {
  res.status(200).json(productsCategories);
};

//* GET Single Products categories
export const getSingleProductsCategories = async (req, res) => {
  try {
    const { category } = req.params;
    const productCategories =
      {
        jewelry: productsCategories[0],
        mens: productsCategories[1],
        womens: productsCategories[2],
        electronics: productsCategories[3],
        furniture: productsCategories[4],
      }[category] || null;
    const products = await categories(productCategories, ProductsModel, req);
    if (products.length < 1) return response.notFound(res);
    response.succes(products, "products", res);
  } catch (err) {
    response.badRequest(res);
  }
};
