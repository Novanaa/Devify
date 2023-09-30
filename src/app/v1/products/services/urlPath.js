function urlPath(url) {
  const oldImageCategory = url.image.split("/")[5];
  const oldImagePath = url.image.split("/")[6];
  const srcPath = `./public/img/products/${oldImageCategory}/${oldImagePath}`;
  return { srcPath, oldImageCategory, oldImagePath };
}

export default urlPath;
