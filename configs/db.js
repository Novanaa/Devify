import mongoose from "mongoose";
import createLogger from "../src/utils/logger.js";
import { ENVDBURI, ENVDBNAME } from "../src/const/config.js";
const logger = createLogger();

// database config
mongoose
  .connect(`${ENVDBURI}/${ENVDBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("Database connected✨"))
  .catch((err) => logger.error(err));
