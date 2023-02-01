import { Router } from "express";
import ToaNha from "../../models/ToaNha";
import KhuVuc from "../../models/KhuVuc";

import {
  getOne,
  getList,
  addIntoTable,
  updateInTable,
  deleteInTable,
} from "../../models/query/index";

const adminToaNha = Router();

// [GET] DANH SACH TOA NHA
adminToaNha.get("/", async (req, res) => {
  let toaNhaRaws = await ToaNha.findAll({
    attributes: ["idKhuVuc", "id", "thuTu", "tenToaNha", "ghiChu", "anHien"],
  });
  let khuVucRaws = await KhuVuc.findAll({
    attributes: ["id", "tenKhuVuc"],
  });

  let khuVucs = {};
  khuVucRaws.forEach((khuVuc) => {
    khuVucs[`${khuVuc.id}`] = khuVuc.tenKhuVuc;
  });

  let toaNhas = [];
  toaNhaRaws.forEach((toaNha) => {
    let { idKhuVuc, ...data } = toaNha;
    data = data.dataValues;

    data["khuVuc"] = khuVucs[idKhuVuc];
    toaNhas.push(data);
  });

  res.render("admin/pages/toanha", {
    toaNhas: toaNhas,
  });
});

// [GET] FORM THEM TOA NHA
adminToaNha.get("/themtoanha", async (req, res) => {
  let khuVucs = await KhuVuc.findAll({
    attributes: ["id", "idKhuVuc", "tenKhuVuc"],
  });

  res.render("admin/pages/toanha/formToaNha", {
    type: "create",
    khuVucs: khuVucs,
  });
});

// [MIDDLEWARE] CHECK TOA NHA CO TON TAI HAY KHONG LUC THEM
adminToaNha.use("/them", async (req, res, next) => {
  let { tenToaNha, idKhuVuc } = req.body;

  let scripts = [];

  let _check = await ToaNha.findOne({
    where: {
      tenToaNha: tenToaNha,
    },
  });

  if (tenToaNha == "" || _check != null) {
    scripts.push(
      `<script>alert("Chưa nhập tên toà nhà hoặc đã nhập nhưng bị trùng!")</script>`
    );
  }

  if (idKhuVuc == "0") {
    scripts.push(`<script>alert("Chưa chọn khu vực!")</script>`);
  }

  if (scripts.length) {
    scripts.push(`<script>history.go(-1)</script>`);
    res.send(scripts.join(" "));
  } else next();
});

// [POST] THEM TOA NHA
adminToaNha.post("/them", async (req, res) => {
  let toaNha = req.body;
  addIntoTable(ToaNha, toaNha, res, "/admin/toanha");
});

// [GET] FORM SUA TOA NHA
adminToaNha.get("/suatoanha/:id", async (req, res) => {
  let id = req.params.id;
  let _check = await ToaNha.findByPk(id);

  if (_check == null) {
    res.redirect("/admin/toanha");
  } else {
    let { dataValues: toaNha } = _check;
    let khuVucs = await KhuVuc.findAll({
      attributes: ["id", "idKhuVuc", "tenKhuVuc"],
    });

    khuVucs.forEach((khuVuc) => {
      if (khuVuc.id == toaNha.idKhuVuc) {
        khuVuc["selected"] = true;
      }
    });

    res.render("admin/pages/toanha/formToaNha", {
      type: "update",
      toaNha: toaNha,
      khuVucs: khuVucs,
    });
  }
});

// [MIDDLEWARE] CHECK TOA NHA CO TON TAI HAY KHONG LUC SUA
adminToaNha.use("/sua", async (req, res, next) => {
  let { id, tenToaNhaBanDau, tenToaNha, idKhuVuc, anHien, ghiChu } = req.body;

  let scripts = [];

  if (tenToaNhaBanDau != tenToaNha) {
    let _check = await ToaNha.findOne({
      where: {
        tenToaNha: tenToaNha,
      },
    });

    if (tenToaNha == "" || _check != null) {
      scripts.push(
        `<script>alert("Chưa nhập tên toà nhà hoặc đã nhập nhưng bị trùng!")</script>`
      );
    }
  }

  if (idKhuVuc == "0") {
    scripts.push(`<script>alert("Chưa chọn khu vực!")</script>`);
  }

  if (scripts.length) {
    scripts.push(`<script>history.go(-1)</script>`);
    res.send(scripts.join(" "));
  } else next();
});

// [POST] SUA TOA NHA
adminToaNha.post("/sua", async (req, res) => {
  let { id, tenToaNha, idKhuVuc, anHien, ghiChu } = req.body;
  updateInTable(
    ToaNha,
    { id, tenToaNha, idKhuVuc, anHien, ghiChu },
    id,
    res,
    "/admin/toanha"
  );
});

// [GET] XOA TOA NHA
adminToaNha.get("/xoa/:id", async (req, res) => {
  let id = req.params.id;
  deleteInTable(ToaNha, res, id, "/admin/toanha");
});

export default adminToaNha;
