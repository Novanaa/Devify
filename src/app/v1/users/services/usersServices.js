import Response from "../../../../utils/res.js";
import createLogger from "../../../../utils/logger.js";
import fileHash from "../../../../utils/fileHash.js";
import FileSystem from "../../../../services/FilesSystem.js";
const fileSystem = new FileSystem();
const logger = createLogger();
const response = new Response();

class UsersServices {
  saveUser = async function (req, res, model, url, password) {
    try {
      await model.insertMany({
        ...req.body,
        picture: url,
        password,
      });
      response.created(res);
    } catch (err) {
      logger.error(err);
    }
  };
  updateUser = async function ({ ...params }) {
    const { req, res, model, key, id, url, srcPath, fileName, password } =
      params;
    const srcPathFileName = srcPath.split("/")[5];
    const hashedFileName = fileHash(fileName);
    const hashedSrcFilePath = fileHash(srcPathFileName);
    try {
      await model.findOneAndUpdate(
        { [key]: id },
        {
          ...req.body,
          picture: url,
          password,
        }
      );
      if (hashedSrcFilePath !== hashedFileName && req.files == null) {
        if (req.body.image !== undefined || req.body.picture !== undefined)
          fileSystem.deleteFile(srcPath);
      }
      response.updated(res);
    } catch (err) {
      logger.error(err);
    }
  };
}

export default UsersServices;
