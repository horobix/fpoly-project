import { Router } from "express";
// import {
//   getListBoMon,
//   addBoMon,
//   deleteBoMon,
//   upDateBoMon,
// } from "../../models/BoMon";
import BoMon from "../../models/BoMon";
import { getList,addIntoTable,getOne,updateInTable,deleteInTable } from "../../models/query";

const adminBomon = Router();

adminBomon.get("/", async (req, res) => {
  getList(BoMon,res,"admin/pages/bomon")
  // getListBoMon(req, res);
});

adminBomon.get("/thembomon", async (req, res) => {
  res.render("admin/pages/bomon/formBoMon", { data: false });
});

adminBomon.post("/thembomon", async (req, res) => {
  let data = req.body;
  addIntoTable(BoMon,data,res,"/admin/bomon")
  // addBoMon(data, res);
});

adminBomon.get("/suabomon/:id", async (req, res) => {
  let id = req.params.id;
  getOne(BoMon,id,res,"admin/pages/bomon/formBoMon")
  // getListBoMon(req, res, id);
});

adminBomon.post("/suabomon/:id", async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  data["anHien"] = parseInt(data["anHien"]);
  updateInTable(BoMon,data,id,res,"/admin/bomon")
  // upDateBoMon(data, res, id);
});

adminBomon.get("/xoa/:id", async (req, res) => {
  let id = req.params.id;
  deleteInTable(BoMon,res,id,"/admin/bomon")
  // deleteBoMon(res, id);
});

export default adminBomon;
