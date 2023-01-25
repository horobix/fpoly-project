import { Router } from "express";

const adminRouter = Router();


adminRouter.get("/", async (req, res) => {
    res.render("admin");
});


adminRouter.get("/users", async (req, res) => {
    res.render("admin/pages/users");
});
adminRouter.get("/giangvien", async (req, res) => {
    res.render("admin/pages/giangvien");
});
adminRouter.get("/rules", async (req, res) => {
    res.render("admin/pages/rules");
});
adminRouter.get("/monhoc", async (req, res) => {
    res.render("admin/pages/monhoc");
});adminRouter.get("/bomon", async (req, res) => {
    res.render("admin/pages/bomon");
});


export default adminRouter;
