import { Server } from "socket.io";
import Logger from "../config/logger.js";

export default ({ httpServer }) => {
  const io = new Server(httpServer, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    //* ip 정보 얻기
    Logger.info("[Socket] User Connected: %s", socket.id);

    socket.on("disconnect", () => {
      Logger.info("[Socket] User Disconnected: %s", socket.id);
    });
  });
  return io;
};
