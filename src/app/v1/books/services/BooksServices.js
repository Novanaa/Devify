import Response from "../../../../utils/res.js";
import FileSystem from "../../../../services/FilesSystem.js";
import fileHash from "../../../../utils/fileHash.js";
import createLogger from "../../../../utils/logger.js";
const logger = createLogger();
const fileSystem = new FileSystem();
const response = new Response();

class BooksServices {
  saveBooks = async function (req, res, model, url) {
    try {
      const books = await model.find();
      await model.insertMany({
        ...req.body,
        id: books.length + 1,
        poster: url,
      });
      response.created(res);
    } catch (err) {
      logger.error(err);
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
      if (hashedSrcFilePath !== hashedFileName && req.files == null) {
        if (req.body.poster !== undefined || req.body.image !== undefined)
          fileSystem.deleteFile(srcPath);
      }
      response.updated(res);
    } catch (err) {
      logger.error(err);
    }
  };
}

export default BooksServices;
