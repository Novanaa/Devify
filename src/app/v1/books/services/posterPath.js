async function posterPath(key, id, model) {
  const url = await model.findOne({ [key]: id }).select(["poster"]);
  const fileName = url?.poster.split("/")[6];
  const srcPath = `./public/img/books/poster/${fileName}`;
  return srcPath;
}

export default posterPath;
