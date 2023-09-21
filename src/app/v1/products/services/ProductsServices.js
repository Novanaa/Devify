import FileSystem from "../../../../services/FilesSystem.js";
import createLogger from "../../../../utils/logger.js";
import fileHash from "../../../../utils/fileHash.js";
import Response from "../../../../utils/res.js";
const response = new Response();
const logger = createLogger();
const fileSystem = new FileSystem();

class ProductsServices {
  saveProduct = async function (req, res, model, url) {
    try {
      await model.insertMany({
        ...req.body,
        image: url,
      });
      response.created(res);
    } catch (err) {
      response.badRequest(res);
    }
  };
  updateProductsImageDirectory = async function ({ ...params }) {
    const { req, res, srcPath, dstFile, model, key, id, newImageUrl } = params;
    try {
      fileSystem.copyFileAndDelete(srcPath, dstFile, res);
      await model.findOneAndUpdate(
        { [key]: id },
        { ...req.body, image: newImageUrl }
      );
    } catch (err) {
      logger.error(err);
    }
  };
  updateProductsImage = async function ({ ...params }) {
    const { req, res, srcPath, model, key, id, url, fileName } = params;
    const srcPathFileName = srcPath.split("/")[5];
    const hasehdSrcPathFileName = fileHash(srcPathFileName);
    const hashedFileName = fileHash(fileName);
    try {
      await model.findOneAndUpdate(
        { [key]: id },
        {
          ...req.body,
          image: url,
        }
      );
      if (hasehdSrcPathFileName !== hashedFileName)
        fileSystem.deleteFile(srcPath);
      response.updated(res);
    } catch (err) {
      response.badRequest(res);
    }
  };
  handleProductsURL = function ({ ...params }) {
    let url, urlPath;
    let { req, oldImageCategory, category, fileName } = params;
    if (req.body.category == undefined && category == null) {
      url = `${req.protocol}://${req.get(
        "host"
      )}/img/products/${oldImageCategory}/${fileName}`;
      urlPath = `./public/img/products/${oldImageCategory}/${fileName}`;
    }
    if (req.body.category !== undefined && category !== undefined) {
      urlPath = `./public/img/products/${category}/${fileName}`;
      url = `${req.protocol}://${req.get(
        "host"
      )}/img/products/${category}/${fileName}`;
    }
    return { url, urlPath };
  };
}

export default ProductsServices;
