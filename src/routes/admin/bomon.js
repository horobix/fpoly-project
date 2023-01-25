import { Router } from "express";
const adminBomon = Router();


adminBomon.get("/", async (req, res) => {
    res.render("admin/pages/bomon");
});


export default adminBomon