import { Router } from "express";

const adminRouter = Router();


adminRouter.get("/", async (req, res) => {
    res.render("admin");
});





export default adminRouter;
