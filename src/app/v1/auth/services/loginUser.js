import Response from "../../../../utils/res.js";
const response = new Response();

async function loginUser(model, id, accessToken, refreshToken, res) {
  await model.findOneAndUpdate({ id: id }, { refresh_token: refreshToken });
  res.cookie("refreshToken", refreshToken, {
    maxAge: 24 * 60 * 60 * 1000,
    secure: true,
    httpOnly: true,
  });
  response.onLoginSuccess(res, accessToken);
}

export default loginUser;
