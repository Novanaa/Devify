async function picturePath(key, id, model) {
  const url = await model.findOne({ [key]: id }).select(["picture"]);
  const fileName = url?.picture.split("/")[6];
  const srcPath = `./public/img/users/pictures/${fileName}`;
  return srcPath;
}

export default picturePath;
