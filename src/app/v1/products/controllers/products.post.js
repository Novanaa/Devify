import { ProductsModel, categoryMappings } from "../models/products.model.js";
import Response from "../../../../utils/res.js";
import FilesUpload from "../../../../services/FileUpload.js";
import ProductsServices from "../services/ProductsServices.js";
import productsValidation from "../../../../validations/productsValidation.js";
import validations from "../../../../services/validations.js";
import createLogger from "../../../../utils/logger.js";
const logger = createLogger();
const productsServices = new ProductsServices();
const filesUpload = new FilesUpload();
const response = new Response();

//* POST  Products Controllers
//* POST New Products Datas
const addProducts = (req, res) => {
  let file, fileName, url;
  const { error, value } = productsValidation.validate(req.body);
  if (error || Object.keys(value).length == 0)
    return validations(value, error, res);
  try {
    filesUpload.post(req, res, (f, fName) => {
      file = f;
      fileName = fName;
    });
  } catch (err) {
    logger.error(err);
  }
  if (value.image == undefined && file == null)
    return response.unprocessable(res, "The image field must be filled");
  const category = categoryMappings[value.category] || null;
  const urlPath = `./public/img/products/${category}/${fileName}`;
  if (value.image !== undefined) {
    if (file == null || file == undefined) {
      url = value.image;
      productsServices.saveProduct(req, res, ProductsModel, url, value);
    }
  }
  if (file !== undefined || file !== null || req.files.image.length < 2) {
    if (value.category == undefined)
      return response.unprocessable(res, "The category field must be filled");
    if (category == null)
      return response.unprocessable(
        res,
        "The category was not valid, Please review your input and make sure it meets the required format and criteria."
      );
    url = `${req.protocol}://${req.get(
      "host"
    )}/img/products/${category}/${fileName}`;
    file?.mv(urlPath, async (err) => {
      if (err) return response.unprocessable(res);
      productsServices.saveProduct(req, res, ProductsModel, url, value);
    });
  }
};

export default addProducts;
