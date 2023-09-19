import "dotenv/config";
import mongoose from "mongoose";
import process from "process";
import createLogger from "../../src/utils/logger.js";
const logger = createLogger();

// database url string
const { ENVDBNAME, ENVDBURI } = process.env;

// database config
mongoose
  .connect(`${ENVDBURI}/${ENVDBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("Database connected✨"))
  .catch((err) => logger.error(err));
