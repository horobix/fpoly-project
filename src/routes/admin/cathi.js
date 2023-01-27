import { Router } from "express";
import CaThi from "../../models/CaThi";
import { getList,addIntoTable,getOne,updateInTable,deleteInTable } from "../../models/query";


const adminCaThiRouter = Router();


adminCaThiRouter.get("/", async (req, res) => {
    getList(CaThi,res,"admin/pages/cathi")
});

adminCaThiRouter.get("/themcathi", async (req, res) => {
    res.render('admin/pages/cathi/formCaThi',{data:false})
});

adminCaThiRouter.post("/themcathi", async (req, res) => {
    let data = req.body
    addIntoTable(CaThi,data,res,"/admin/cathi")
    
});

adminCaThiRouter.get("/suacathi/:id", async (req, res) => {
    let id = req.params.id
    getOne(CaThi,id,res,"admin/pages/cathi/formCaThi")
    // getListCaThi(req,res,id)
});
adminCaThiRouter.post("/suacathi/:id", async (req, res) => {
    let id = req.params.id
    let data = req.body
    updateInTable(CaThi,data,id,res,"/admin/cathi")
    // upDateCaThi(data,res,id)
});

adminCaThiRouter.get('/xoa/:id', async (req, res) => {
    let id = req.params.id
    deleteInTable(CaThi,res,id,"/admin/cathi")
})


export default adminCaThiRouter