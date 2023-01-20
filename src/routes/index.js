import { Router } from "express";
import User from "../models/User";
import lichThi from "../models/lichThi";
import kyThi from "../models/kyThi";
import baocaoThi from "../models/baocaoThi";
import hocKy from "../models/hocKy";
const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  let user = await User.findAll({
    where: {
      ten: "Thuy",
    },
  });

  res.json(`Find: ${JSON.stringify(user)}`);
});

indexRouter.get("/add", async (req, res) => {
  let newUser = {
    email: "thuynnt@fpt.edu.vn",
    password: "123456",
    ho: "Nguyen",
    ten: "Thuy",
    role: 12,
    block: true,
  };

  let insertedUser = await User.create(newUser);
  console.log(insertedUser);
});

export default indexRouter;
