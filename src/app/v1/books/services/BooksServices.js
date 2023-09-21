import Response from "../../../../utils/res.js";
import FileSystem from "../../../../services/FilesSystem.js";
import fileHash from "../../../../utils/fileHash.js";
const fileSystem = new FileSystem();
const response = new Response();

class BooksServices {
  saveBooks = async function (req, res, model, url) {
    try {
      await model.insertMany({
        ...req.body,
        poster: url,
      });
      response.created(res);
    } catch (err) {
      response.badRequest(res);
    }
  };
  updateBooks = async function ({ ...params }) {
    const { req, res, srcPath, model, key, id, url, fileName } = params;
    const srcPathFileName = srcPath.split("/")[5];
    const hashedFileName = fileHash(fileName);
    const hashedSrcFilePath = fileHash(srcPathFileName);
    try {
      await model.findOneAndUpdate(
        { [key]: id },
        {
          ...req.body,
          poster: url,
        }
      );
      if (hashedSrcFilePath !== hashedFileName) fileSystem.deleteFile(srcPath);
      response.updated(res);
    } catch (err) {
      response.badRequest(res);
    }
  };
}

export default BooksServices;
