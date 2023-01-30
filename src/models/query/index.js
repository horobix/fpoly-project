// QUERY SELECT ALL
// import * as bcrypt from 'bcrypt';

import addCaThi from "./query-add/addCathi";
import addBoMon from "./query-add/addBoMon";
import addRule from "./query-add/addRule";
import addUser from "./query-add/addUser";
import addGiangVien from "./query-add/addGiangVien";
import addKhuVuc from "./query-add/addKhuVuc";

export const getList = (table, res, url) => {
  table
    .findAll()
    .then((data) => {
      res.render(url, { listData: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// QUERY DETAIL DATA
export const getOne = (table, id, res, url) => {
  table
    .findAll({
      where: {
        id: id,
      },
    })
    .then((data) => {
      res.render(url, { data: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// QUERY INSERT DATA
export const addIntoTable = async (table, data, res, url) => {
  switch (true) {
    case Boolean(data.tenCaThi): // Thêm Ca Thi
      addCaThi(table, data, res, url);
      break;
    case Boolean(data.tenBoMon): // Thêm Bộ Môn
      addBoMon(table, data, res, url);
      break;

    case Boolean(data.tenRule): // Thêm Rules
      addRule(table, data, res, url);
      break;
    case Boolean(data.khongPhanGV2): //  Thêm Giảng Viên
      addGiangVien(table, data, res, url);
      break;
    case Boolean(data.tenKhuVuc): //  Thêm Khu Vực
      addKhuVuc(table, data, res, url);
      break;
    // case more and break
    default:
      res.redirect(url);
      break;
  }
};

// QUERY UPDATE
export const updateInTable = (table, data, id, res, url) => {
  table
    .update(data, {
      where: {
        id: id,
      },
    })
    .then((dataAdd) => {
      res.redirect(url);
    })
    .catch((err) => {
      console.log(err);
    });
};

// QUERY DELETE
export const deleteInTable = (table, res, id, url) => {
  table
    .destroy({
      where: {
        id: id,
      },
    })
    .then(() => {
      console.log("Xóa thành công");
      res.redirect(url);
    })
    .catch((err) => {
      console.log(err);
    });
};
