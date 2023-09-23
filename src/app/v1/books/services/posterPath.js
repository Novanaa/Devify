import createLogger from "../../../../utils/logger.js";
const logger = createLogger();

async function posterPath(key, id, model) {
  const url = await model.findOne({ [key]: id }).select(["poster"]);
  if (url == null) logger.error("Books - Not Found");
  const fileName = url?.poster.split("/")[6];
  const srcPath = `./public/img/books/poster/${fileName}`;
  return srcPath;
}

export default posterPath;
