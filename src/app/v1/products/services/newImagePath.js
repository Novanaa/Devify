function newImagePath(req, category, oldImagePath, results) {
  const dstFile = `./public/img/products/${category}/${oldImagePath}`;
  const newImageUrl = `${req.protocol}://${req.get(
    "host"
  )}/img/products/${category}/${dstFile.split("/")[5]}`;
  results(dstFile, newImageUrl);
}

export default newImagePath;
