import { Router } from "express";
const adminMonhoc = Router();


adminMonhoc.get("/", async (req, res) => {
    res.render("admin/pages/monhoc");
});


export default adminMonhoc