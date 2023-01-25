import { Router } from "express";
const adminRules = Router();


adminRules.get("/", async (req, res) => {
    res.render("admin/pages/giangvien");
});


export default adminRules