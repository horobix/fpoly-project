import { Router } from "express";
const adminGiangVienRouter = Router();


adminGiangVienRouter.get("/", async (req, res) => {
    res.render("admin/pages/giangvien");
});


export default adminGiangVienRouter