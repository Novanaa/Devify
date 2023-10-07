import "dotenv/config";
import process from "process";

export const { PORT, ENVDBURI, ENVDBNAME, JWTACCESSTOKEN, JWTREFRESHTOKEN } =
  process.env;
