import app from "./app.js";
import createLogger from "./utils/logger.js";
const logger = createLogger();
const port = 8000;

function createServer() {
  // app listener
  app.listen(port, () => {
    logger.info(`Server running and up in port ${port}`);
  });
}

createServer();
