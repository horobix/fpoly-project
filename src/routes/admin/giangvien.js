import { Router } from "express";
import { getList,addIntoTable,getOne,updateInTable,deleteInTable } from "../../models/query";
import GiangVien from '../../models/GiangVien';

const adminGiangVienRouter = Router();

adminGiangVienRouter.get("/", async (req, res) => {
    getList(GiangVien,res,"admin/pages/giangvien")
});

adminGiangVienRouter.get("/themgiangvien", async (req, res) => {
    res.render('admin/pages/giangvien/formGV',{data:false})
});

adminGiangVienRouter.post("/themgiangvien", async (req, res) => {
    let data = req.body
    addIntoTable(GiangVien,data,res,"/admin/giangvien")
    
});

adminGiangVienRouter.get("/suagiangvien/:id", async (req, res) => {
    let id = req.params.id
    getOne(GiangVien,id,res,"admin/pages/giangvien/formGV")
    // getListCaThi(req,res,id)
});
adminGiangVienRouter.post("/suagiangvien/:id", async (req, res) => {
    let id = req.params.id
    let data = req.body
    updateInTable(GiangVien,data,id,res,"/admin/giangvien")
    // upDateCaThi(data,res,id)
});

adminGiangVienRouter.get('/xoa/:id', async (req, res) => {
    let id = req.params.id
    deleteInTable(GiangVien,res,id,"/admin/giangvien")
})

export default adminGiangVienRouter