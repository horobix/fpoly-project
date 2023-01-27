import { Router } from "express";
import {
  getList,
  _checkExists,
  _addOne,
  _deleteOne,
  _editOne,
} from "../../models/MonHoc";
import MonHoc from "../../models/MonHoc";

const adminMonhoc = Router();

// LISTING
adminMonhoc.get("/", async (req, res) => {
  getList(req, res, "admin/pages/monhoc");
});

// ADD UI
adminMonhoc.get("/themmh", async (req, res) => {
  res.render("admin/pages/monhoc/formMH", {
    type: "add",
    data: null,
  });
});

// ADD
adminMonhoc.post("/themmh/submit", async (req, res) => {
  let data = req.body;

  let isExists = await _checkExists(data.maMH);

  if (isExists) {
    res.send(
      `
        <script>
          alert('Mã môn học đã tồn tại!');
          window.history.go(-1);
        </script>
      `
    );
  } else {
    await _addOne(req, res, data);
  }
});

// DELETE
adminMonhoc.get("/xoamh/:id", async (req, res) => {
  let id = req.params.id;
  _deleteOne(req, res, id);
});

// EDIT UI
adminMonhoc.get("/suamh/:id", async (req, res) => {
  let id = req.params.id;
  let data = await MonHoc.findByPk(id);
  res.render("admin/pages/monhoc/formMH", {
    type: "edit",
    data: data,
  });
});

// EDIT
adminMonhoc.post("/suamh/submit", async (req, res) => {
  let data = req.body;

  let isExists = await _checkExists(data.maMH);

  if (isExists && data.maMH != data.maMHOld) {
    res.send(
      `
        <script>
          alert('Mã môn học đã tồn tại!');
          window.history.go(-1);
        </script>
      `
    );
  } else {
    await _editOne(req, res, data);
  }
});

export default adminMonhoc;
