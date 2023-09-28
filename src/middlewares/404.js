function notFound(req, res) {
  res.status(404).json({
    TypeError: "Not Found",
    messege: "The routes wasn't found!",
    status: 404,
  });
}

export default notFound;
