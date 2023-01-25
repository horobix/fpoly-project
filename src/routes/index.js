import { Router } from "express";

import {getNewGroup} from'../models/CaThi'

const indexRouter = Router();

indexRouter.get("/", async ( req,res) => {
  getNewGroup(req,res)
  // res.render("index");
});

export default indexRouter;
