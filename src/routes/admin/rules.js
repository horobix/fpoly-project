import { Router } from "express";
import {
  getListRule,
  updateRule,
  addRule,
  deleteRule,
} from "../../models/Rule";

const adminRules = Router();

adminRules.get("/", async (req, res) => {
  getListRule(req, res);
});
adminRules.get("/themRule", async (req, res) => {
  res.render("admin/pages/rules/formRule", { detailRule: false });
});

adminRules.post("/themRule", async (req, res) => {
  let data = req.body;
  addRule(data, res);
});

adminRules.get("/suaRule/:id", async (req, res) => {
  let id = req.params.id;
  getListRule(req, res, id);
});
adminRules.post("/suaRule/:id", async (req, res) => {
  let id = req.params.id;
  let data = req.body;

  updateRule(data, res, id);
});

adminRules.get("/xoa/:id", async (req, res) => {
  let id = req.params.id;
  deleteRule(res, id);
});

export default adminRules;
