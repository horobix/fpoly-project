import { Router } from "express";
import { User } from "../models/User";

const indexRouter = Router();

indexRouter.get("/", async ( req,res) => {
  
  res.render("index");
});

export default indexRouter;
