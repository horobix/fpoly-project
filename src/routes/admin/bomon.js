import { Router } from "express";
import {
  getListBoMon,
  addBoMon,
  deleteBoMon,
  upDateBoMon,
} from "../../models/BoMon";

const adminBomon = Router();

adminBomon.get("/", async (req, res) => {
  getListBoMon(req, res);
});

adminBomon.get("/thembomon", async (req, res) => {
  res.render("admin/pages/bomon/formBoMon", { detailBoMon: false });
});

adminBomon.post("/thembomon", async (req, res) => {
  let data = req.body;
  console.log(data);
  addBoMon(data, res);
});

adminBomon.get("/suabomon/:id", async (req, res) => {
  let id = req.params.id;
  getListBoMon(req, res, id);
});

adminBomon.post("/suabomon/:id", async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  data["anHien"] = parseInt(data["anHien"]);
  console.log(data);
  upDateBoMon(data, res, id);
});

adminBomon.get("/xoa/:id", async (req, res) => {
  let id = req.params.id;
  deleteBoMon(res, id);
});

export default adminBomon;
