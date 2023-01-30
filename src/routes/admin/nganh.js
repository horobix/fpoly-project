import { Router } from "express";
import Nganh from "../../models/Nganh";
import { getList,addIntoTable,getOne,updateInTable,deleteInTable } from "../../models/query";

const adminNganh = Router();

adminNganh.get("/", async (req, res) => {
  getList(Nganh,res,"admin/pages/nganh")
});
adminNganh.get("/themnganh", async (req, res) => {
  res.render("admin/pages/nganh/formNganh", { data: false });
});

adminNganh.post("/themnganh", async (req, res) => {
  let data = req.body;
  addIntoTable(Nganh,data,res,"/admin/nganh")
});

adminNganh.get("/suanganh/:id", async (req, res) => {
  let id = req.params.id;
  getOne(Nganh,id,res,"admin/pages/nganh/formNganh")
  
});
adminNganh.post("/suanganh/:id", async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  updateInTable(Nganh,data,id,res,"/admin/nganh")
  // updateRule(data, res, id);
});

adminNganh.get("/xoa/:id", async (req, res) => {
  let id = req.params.id;
  deleteInTable(Nganh,res,id,"/admin/nganh")
  // deleteRule(res, id);
});

export default adminNganh;
