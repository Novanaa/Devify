import {
  getAllProducts,
  getAllProductsCaegories,
  getSingleProduct,
  getSingleProductByUniquekey,
  getSingleProductsCategories,
  searchQueriesProducts,
} from "./products.get.js";
import addProducts from "./products.post.js";
import {
  updateProductsById,
  updateProductsByUniquekey,
} from "./products.patch.js";
import {
  deleteProductById,
  deleteProductByUniquekey,
} from "./products.delete.js";

//# Products Controllers
const products = {
  getAllProducts,
  getAllProductsCaegories,
  getSingleProduct,
  getSingleProductByUniquekey,
  getSingleProductsCategories,
  searchQueriesProducts,
  addProducts,
  updateProductsById,
  updateProductsByUniquekey,
  deleteProductById,
  deleteProductByUniquekey,
};

export default products;
