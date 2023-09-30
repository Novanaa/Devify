import Response from "../../../../utils/res.js";
import createLogger from "../../../../utils/logger.js";
import fileHash from "../../../../utils/fileHash.js";
import FileSystem from "../../../../services/FilesSystem.js";
const fileSystem = new FileSystem();
const logger = createLogger();
const response = new Response();

class UsersServices {
  saveUser = async function (req, res, model, url, password, value) {
    try {
      const users = await model.find();
      await model.insertMany({
        ...value,
        id: users.length + 1,
        picture: url,
        password,
      });
      response.created(res);
    } catch (err) {
      logger.error(err);
    }
  };
  updateUser = async function ({ ...params }) {
    // prettier-ignore
    const { req, res, model, key, id, url, srcPath, fileName, password, value } =
      params;
    const srcPathFileName = srcPath.split("/")[5];
    const hashedFileName = fileHash(fileName);
    const hashedSrcFilePath = fileHash(srcPathFileName);
    try {
      await model.findOneAndUpdate(
        { [key]: id },
        {
          ...value,
          picture: url,
          password,
        }
      );
      if (hashedSrcFilePath !== hashedFileName && req.files == null) {
        if (value.image !== undefined || value.picture !== undefined)
          fileSystem.deleteFile(srcPath);
      }
      response.updated(res);
    } catch (err) {
      logger.error(err);
    }
  };
}

export default UsersServices;
