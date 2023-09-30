async function categories(category, Models, req) {
  const { limit, skip } = req.query;
  const sort = req.query.sort == "desc" ? -1 : 1;
  const datas = await Models.find({
    category: category,
  })
    .select(["-__v"])
    .sort({ id: parseInt(sort) })
    .limit(parseInt(limit))
    .skip(parseInt(skip));

  return datas;
}

export default categories;
