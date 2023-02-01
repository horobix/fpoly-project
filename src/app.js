// Libraries importing
import express, { json } from "express";
import * as dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import createError from "http-errors";

// Routes importing
import indexRouter from "./routes";

import adminRouter from "./routes/admin";

import adminCaThiRouter from "./routes/admin/cathi";
import adminGiangVienRouter from "./routes/admin/giangvien";
import adminUsers from "./routes/admin/users";
import adminRules from "./routes/admin/rules";
import adminMonhoc from "./routes/admin/monhoc";
import adminBomon from "./routes/admin/bomon";
import adminKhuVuc from "./routes/admin/khuvuc";
import adminNganh from "./routes/admin/nganh";
import adminCoSo from "./routes/admin/coso";

// App initialization
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// App configuration
dotenv.config();
app.use(json());
var bodyParser = require("body-parser");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const publicRouter = express.static(path.join(__dirname, "public"));
app.use(publicRouter);

app.use(bodyParser.urlencoded({ extended: true }));

// Routes applying
app.use("/", indexRouter);
app.use("/admin", adminRouter, publicRouter);
app.use("/admin/cathi", adminCaThiRouter, publicRouter);
app.use("/admin/giangvien", adminGiangVienRouter, publicRouter);
app.use("/admin/users", adminUsers, publicRouter);
app.use("/admin/rules", adminRules, publicRouter);
app.use("/admin/monhoc", adminMonhoc, publicRouter);
app.use("/admin/bomon", adminBomon, publicRouter);
app.use("/admin/khuvuc", adminKhuVuc, publicRouter);
app.use("/admin/nganh", adminNganh, publicRouter);
app.use("/admin/coso", adminCoSo, publicRouter);
// Routes Api

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
