import { Router } from "express";
// import {
//   getListRule,
//   updateRule,
//   addRule,
//   deleteRule,
// } from "../../models/Rule";
import Rule from "../../models/Rule";
import { getList,addIntoTable,getOne,updateInTable,deleteInTable } from "../../models/query";

const adminRules = Router();

adminRules.get("/", async (req, res) => {
  getList(Rule,res,"admin/pages/rules")
  // getListRule(req, res);
});
adminRules.get("/themRule", async (req, res) => {
  res.render("admin/pages/rules/formRule", { data: false });
});

adminRules.post("/themRule", async (req, res) => {
  let data = req.body;
  addIntoTable(Rule,data,res,"/admin/rules")
  // addRule(data, res);
});

adminRules.get("/suaRule/:id", async (req, res) => {
  let id = req.params.id;
  getOne(Rule,id,res,"admin/pages/rules/formRule")
  // getListRule(req, res, id);
});
adminRules.post("/suaRule/:id", async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  updateInTable(Rule,data,id,res,"/admin/rules")
  // updateRule(data, res, id);
});

adminRules.get("/xoa/:id", async (req, res) => {
  let id = req.params.id;
  deleteInTable(Rule,res,id,"/admin/rules")
  // deleteRule(res, id);
});

export default adminRules;
