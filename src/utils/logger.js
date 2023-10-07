import winston from "winston";

function createLogger() {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.printf((info) => {
      return `${new Date()} - ${info.level.toUpperCase()} : ${info.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });

  return logger;
}

export default createLogger;
