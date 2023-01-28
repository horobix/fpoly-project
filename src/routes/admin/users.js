import { Router } from "express";
// import { getListUser, addUser, updateUser, deleteUser } from "../../models/User";
import User from "../../models/User";
import { getList,addIntoTable,getOne,updateInTable,deleteInTable } from "../../models/query";
import addUser from "../../models/query/query-add/addUser";
import updateUser from "../../models/query/query-update/updateUser";

const adminUsers = Router();


adminUsers.get("/", async (req, res) => {
    getList(User,res,"admin/pages/users")
    // getListUser(req, res);
});

adminUsers.get("/themuser", async (req, res) => {
    res.render('admin/pages/users/formUser',{data:false})
});

adminUsers.post("/themuser", async (req, res) => {
    addUser(User, req, res,"/admin/users");
});

adminUsers.get("/suauser/:id", async (req, res) => {
    let id = req.params.id
    getOne(User,id,res,"admin/pages/users/formuser")
    // getListUser(req,res,id)
});

adminUsers.post("/suauser/:id", async (req, res) => {
    let id = req.params.id;
    updateUser(User,id, req, res,"/admin/users")
});

adminUsers.get("/xoauser/:id", async (req, res) => {
    let id = req.params.id
    deleteInTable(User,res,id,"/admin/users")
    // deleteUser(res,id);
});


export default adminUsers