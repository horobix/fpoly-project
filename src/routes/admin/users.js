import { Router } from "express";
import { getListUser, addUser, updateUser, deleteUser } from "../../models/User";


const adminUsers = Router();


adminUsers.get("/", async (req, res) => {
    getListUser(req, res);
});

adminUsers.get("/themuser", async (req, res) => {
    res.render('admin/pages/users/formUser',{detailUser:false})
});

adminUsers.post("/themuser", async (req, res) => {
    let data = req.body;
    addUser(data,res);
});

adminUsers.get("/suauser/:id", async (req, res) => {
    let id = req.params.id
    getListUser(req,res,id)
});

adminUsers.post("/suauser/:id", async (req, res) => {
    let id = req.params.id
    let data = req.body;
    updateUser(data,res,id);
});

adminUsers.get("/xoauser/:id", async (req, res) => {
    let id = req.params.id
    deleteUser(res,id);
});


export default adminUsers