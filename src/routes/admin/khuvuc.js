import { Router } from "express";
import KhuVuc from "../../models/KhuVuc";

import {
  getList,
  getOne,
  addIntoTable,
  updateInTable,
  deleteInTable,
} from "../../models/query/index";

const adminKhuVuc = Router();

adminKhuVuc.get("/", (req, res) => {
  getList(KhuVuc, res, "admin/pages/khuvuc");
});

adminKhuVuc.get("/themkhuvuc", (req, res) => {
  res.render("admin/pages/khuvuc/formKhuVuc", { data: false });
});

adminKhuVuc.post("/themkhuvuc", (req, res) => {
  let data = req.body;
  addIntoTable(KhuVuc, data, res, "/admin/khuvuc");
});

adminKhuVuc.get("/suakhuvuc/:id", (req, res) => {
  let id = req.params.id;
  console.log(`Sửa khu vực với ID: ${id}`);
  getOne(KhuVuc, id, res, "admin/pages/khuvuc/formKhuVuc");
});

adminKhuVuc.post("/suakhuvuc/:id", (req, res) => {
  let id = req.params.id;
  let data = req.body;
  updateInTable(KhuVuc, data, id, res, "/admin/khuvuc");
});

adminKhuVuc.get("/xoa/:id", (req, res) => {
  let id = req.params.id;
  deleteInTable(KhuVuc, res, id, "/admin/khuvuc");
});

export default adminKhuVuc;
