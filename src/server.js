import app from "./app.js";
import createLogger from "./utils/logger.js";
const logger = createLogger();
import { PORT } from "./const/config.js";

function createServer() {
  // app listener
  app.listen(PORT || 8000, () => {
    logger.info(`Server running and up in http://localhost:${PORT}`);
  });
}

createServer();
