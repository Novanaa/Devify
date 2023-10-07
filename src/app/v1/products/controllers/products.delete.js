import validator from "validator";
import { ProductsModel } from "../models/products.model.js";
import Response from "../../../../utils/res.js";
import imageUrl from "../services/imageUrl.js";
import FileSystem from "../../../../services/FilesSystem.js";
import createLogger from "../../../../utils/logger.js";
const logger = createLogger();
const fileSystem = new FileSystem();
const response = new Response();

export const deleteProductById = async (req, res) => {
  const { id } = req.params;
  let srcPath;
  if (!validator.isNumeric(id)) return response.unprocessable(res);
  await imageUrl("id", id, res, (src) => (srcPath = src));
  try {
    const product = await ProductsModel.findOneAndDelete({ id: id });
    if (product == null) return response.notFound(res);
    fileSystem.deleteFile(srcPath);
    response.deleted(res);
  } catch (err) {
    logger.error(err);
  }
};

export const deleteProductByUniquekey = async (req, res) => {
  const { id } = req.params;
  let srcPath;
  if (!validator.isMongoId(id))
    return response.unprocessable(res, "The request id is not a uniquekey");
  await imageUrl("_id", id, res, (src) => (srcPath = src));
  try {
    const product = await ProductsModel.findOneAndDelete({ _id: id });
    if (product == null) return response.notFound(res);
    fileSystem.deleteFile(srcPath);
    response.deleted(res);
  } catch (err) {
    logger.error(err);
  }
};
