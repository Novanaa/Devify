import fs from "fs";
import Response from "../utils/res.js";
import createLogger from "../utils/logger.js";
const logger = createLogger();
const response = new Response();

class FileSystem {
  copyFileAndDelete = function (srcPath, dstPath, res) {
    if (fs.existsSync(srcPath)) {
      fs.copyFile(srcPath, dstPath, (err) => {
        if (err) return response.unprocessable(res);
        fs.unlinkSync(srcPath);
      });
    }
    if (!fs.existsSync(srcPath)) logger.error("Cannot transfer the file");
  };
  deleteFile = function (path) {
    path = path || "";
    if (!fs.existsSync(path)) logger.error("Cannot delete the file");
    if (fs.existsSync(path)) {
      fs.unlink(path, (err) => {
        logger.error(err);
      });
    }
  };
}

export default FileSystem;
