import path from "path";
import imageExt from "../utils/imageExtension.js";
import Response from "../utils/res.js";
const response = new Response();

class FilesUpload {
  post = function (req, res, files) {
    let fileExt;
    let file;
    if (req.files !== null) {
      if (!req.files.image) return response.unprocessable(res);
      if (req.files.image?.length > 1)
        return response.unprocessable(
          res,
          "Multiple images upload does not supported"
        );
      file = req.files.image;
      file?.name !== undefined ? (fileExt = path.extname(file.name)) : null;
      const fileName = file?.md5 + fileExt;
      if (req.files.image?.size > 5000000)
        return response.unprocessable(
          res,
          "The image size must be less than 5mb"
        );
      if (!imageExt.includes(fileExt?.toLowerCase()))
        return response.unprocessable(
          res,
          "Images extension does not supported."
        );
      files(file, fileName);
    }
    if (req.body.image == undefined && file == null) {
      response.unprocessable(res, "The image field must be filled");
    }
  };
  patch = function (req, res, files) {
    let file;
    let fileName;
    if (req.files !== null) {
      if (req.files.image.length > 1)
        return response.unprocessable(
          res,
          "Multiple images upload does not supported"
        );
      const f = req.files.image;
      const fileExt = path.extname(f.name);
      const fName = f.md5 + fileExt;
      if (req.files.image.size > 5000000)
        return response.unprocessable(
          res,
          "The image size must be less than 5mb"
        );
      if (!imageExt.includes(fileExt?.toLowerCase()))
        return response.unprocessable(
          res,
          "Images extension does not supported."
        );
      file = f;
      fileName = fName;
    }
    files(file, fileName);
  };
  delete = function () {};
}

export default FilesUpload;
