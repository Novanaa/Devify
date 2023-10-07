import { ProductsModel } from "../models/products.model.js";
import createLogger from "../../../../utils/logger.js";
const logger = createLogger();

async function imageUrl(key, id, res, results) {
  const imageUrl = await ProductsModel.findOne({ [key]: id }).select(["image"]);
  if (imageUrl == null) logger.error("Products - Not Found");
  const oldImageCategory = imageUrl?.image.split("/")[5];
  const oldImagePath = imageUrl?.image.split("/")[6];
  const srcPath = `./public/img/products/${oldImageCategory}/${oldImagePath}`;
  results(srcPath, oldImageCategory, oldImagePath);
}

export default imageUrl;
