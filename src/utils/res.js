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
  updated = function (res, messege) {
    messege = messege || "Succesfully Updated✨";
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
  onLoginSuccess = function (res, token) {
    res.status(200).json({
      messege: "You're in! Access granted.✨",
      status: 200,
      success: true,
      token,
    });
  };
  badRequest = function (res, messege) {
    messege =
      messege ||
      "Oops! Your request cannot be processed due to a bad request. Please check your input and try again.";
    res.status(400).json({
      TypeError: "Bad Request",
      messege,
      status: 400,
    });
  };
  notFound = function (res, messege) {
    messege =
      messege || "Oops! The data you are looking for could not be found.";
    res.status(404).json({
      TypeError: "Not Found",
      messege,
      status: 404,
    });
  };
  unprocessable = function (res, messege) {
    messege =
      messege ||
      "The content you provided could not be processed due to errors in the data. Please review your input and make sure it meets the required format and criteria.";
    res.status(422).json({
      TypeError: "Unprocessable Content",
      messege,
      status: 422,
    });
  };
  unauth = function (res, messege) {
    messege =
      messege ||
      "You are not authorized to access this resource. Please provide valid credentials or authentication.";
    res.status(401).json({
      TypeError: "Unauthorized",
      messege,
      status: 401,
    });
  };
}

export default Response;
