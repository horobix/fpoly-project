import { Router } from "express";
const adminUsers = Router();


adminUsers.get("/", async (req, res) => {
    res.render("admin/pages/users");
});


export default adminUsers