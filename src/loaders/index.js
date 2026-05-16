// import pool from "./sql.js";
import expressLoader from "./express.js";
import sqlLoader from "./mysql.js";
import socketLoader from "./socket.js";
import Logger from "../config/logger.js";

export default async ({ expressApp, httpServer }) => {
  // express 설정
  await expressLoader({ app: expressApp });
  Logger.info("✌️ Express loaded");

  await sqlLoader;
  Logger.info("✌️ DB loaded");

  await socketLoader({ httpServer });
  Logger.info("✌️ Socket loaded");
};
