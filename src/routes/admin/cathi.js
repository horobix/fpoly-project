import { Router } from "express";
import { getListCaThi,addCaThi,upDateCaThi,deleteCaThi } from "../../models/CaThi";


const adminCaThiRouter = Router();


adminCaThiRouter.get("/", async (req, res) => {
    getListCaThi(req,res)
});

adminCaThiRouter.get("/themcathi", async (req, res) => {
    res.render('admin/pages/cathi/formCaThi',{detailCaThi:false})
});

adminCaThiRouter.post("/themcathi", async (req, res) => {
    let data = req.body
    addCaThi(data,res)
});

adminCaThiRouter.get("/suacathi/:id", async (req, res) => {
    let id = req.params.id
    getListCaThi(req,res,id)
});
adminCaThiRouter.post("/suacathi/:id", async (req, res) => {
    let id = req.params.id
    let data = req.body
    
    upDateCaThi(data,res,id)
});

adminCaThiRouter.get('/xoa/:id', async (req, res) => {
    let id = req.params.id
    deleteCaThi(res,id)
})


export default adminCaThiRouter