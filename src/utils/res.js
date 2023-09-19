class Response {
  succes = function (datas, key, res) {
    res.status(200).json({
      [key]: datas,
      status: 200,
      total: datas.length,
    });
  };
  succesWithSingleData = function (data, key, res) {
    res.status(200).json({
      [key]: data,
      status: 200,
    });
  };
  created = function (res) {
    res.status(201).json({
      messege: "Succesfully Created✨",
      status: 201,
      success: true,
    });
  };
  updated = function (res, msg) {
    const messege = msg == undefined ? "Succesfully Updated✨" : msg;
    res.status(200).json({
      messege,
      status: 200,
      success: true,
    });
  };
  deleted = function (res) {
    res.status(200).json({
      messege: "Succesfully Deleted✨",
      status: 200,
      success: true,
    });
  };
  badRequest = function (res) {
    res.status(400).json({
      TypeError: "Bad Request",
      messege:
        "Oops! Your request cannot be processed due to a bad request. Please check your input and try again.",
      status: 400,
    });
  };
  notFound = function (res, msg) {
    const messege =
      msg == undefined
        ? "Oops! The data you are looking for could not be found."
        : msg;
    res.status(404).json({
      TypeError: "Not Found",
      messege,
      status: 404,
    });
  };
  unprocessable = function (res, msg) {
    const messege =
      msg == undefined
        ? "The content you provided could not be processed due to errors in the data. Please review your input and make sure it meets the required format and criteria."
        : msg;
    res.status(422).json({
      TypeError: "Unprocessable Content",
      messege,
      status: 422,
    });
  };
}

export default Response;
