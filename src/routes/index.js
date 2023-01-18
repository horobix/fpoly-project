import { Router } from "express";
import MonHoc from "../models/MonHoc";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
    res.render("index");
});

export default indexRouter;
