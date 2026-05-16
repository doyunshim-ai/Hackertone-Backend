import { Router } from "express";

const route = Router();

export default (app) => {
  app.use("/auth", route);
};
