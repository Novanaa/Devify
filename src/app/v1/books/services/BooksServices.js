import Response from "../../../../utils/res.js";
const response = new Response();

class BooksServices {
  saveBooks = async function (req, res, model, url) {
    try {
      await model.insertMany({
        ...req.body,
        poster: url,
      });
      response.created(res);
    } catch (err) {
      response.badRequest(res);
    }
  };
}

export default BooksServices;
