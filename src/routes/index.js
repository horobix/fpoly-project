import { Router } from "express";
import GiangVien from "../models/GiangVien";
const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  res.render("index");
});

export default indexRouter;
