import { Router } from "express";
import GiangVien from "../models/GiangVien";
const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  res.render("index");
});

indexRouter.get("/admin/cathi", async (req, res) => {
  res.render("admin/pages/cathi");
});
indexRouter.get("/admin/users", async (req, res) => {
  res.render("admin/pages/users");
});
indexRouter.get("/admin", async (req, res) => {
  res.render("admin/pages/cathi");
});
indexRouter.get("/admin", async (req, res) => {
  res.render("admin/pages/cathi");
});
indexRouter.get("/admin", async (req, res) => {
  res.render("admin/pages/cathi");
});
indexRouter.get("/admin", async (req, res) => {
  res.render("admin/pages/cathi");
});

export default indexRouter;
