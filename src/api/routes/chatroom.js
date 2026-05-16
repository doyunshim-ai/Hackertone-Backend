import { Router } from "express";

const route = Router();

export default (app) => {
  app.use("/chatroom", route);
};
