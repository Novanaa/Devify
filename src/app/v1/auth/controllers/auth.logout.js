import { UsersModel } from "../../users/models/user.model.js";
import Response from "../../../../utils/res.js";
const response = new Response();

async function logout(req, res) {
  const refreshToken = req.cookies.refreshToken;
  if (refreshToken == undefined) return response.badRequest(res);
  const user = await UsersModel.find({ refresh_token: refreshToken }).select([
    "refresh_token",
    "id",
  ]);
  if (user[0] == null) return response.unprocessable(res);
  await UsersModel.findOneAndUpdate(
    { id: user[0].id },
    { refresh_token: null }
  );
  res.clearCookie("refreshToken");
  return response.onLogOutSuccess(res);
}

export default logout;
