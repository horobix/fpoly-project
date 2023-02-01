import { Router } from "express";
import CoSo from "../../models/CoSo";
import {
  addIntoTable,
  deleteInTable,
  getList,
  getOne,
  updateInTable,
} from "../../models/query";

const adminCoSoRouter = Router();

adminCoSoRouter.get("/", async (req, res) => {
    getList(CoSo, res, "admin/pages/coso");
})

adminCoSoRouter.get("/themcoso", async (req, res) => {
    res.render("admin/pages/coso/formCoSo", { data: false });
})

adminCoSoRouter.post("/themcoso", async (req, res) => { 
    let data = req.body;
    addIntoTable(CoSo, data, res, "/admin/coso");
})

adminCoSoRouter.get("/suacoso/:id", async (req, res) => {
  let id = req.params.id;
  getOne(CoSo, id, res, "admin/pages/coso/formCoSo");
});
adminCoSoRouter.post("/suacoso/:id", async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  updateInTable(CoSo, data, id, res, "/admin/coso");
});

adminCoSoRouter.get("/xoa/:id", async (req, res) => {
  let id = req.params.id;
  deleteInTable(CoSo, res, id, "/admin/coso");
})

export default adminCoSoRouter;
