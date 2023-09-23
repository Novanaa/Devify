import createLogger from "../../../../utils/logger.js";
const logger = createLogger();

async function picturePath(key, id, model) {
  const url = await model.findOne({ [key]: id }).select(["picture"]);
  if (url == null) logger.error("Users - Not Found");
  const fileName = url?.picture.split("/")[6];
  const srcPath = `./public/img/users/pictures/${fileName}`;
  return srcPath;
}

export default picturePath;
