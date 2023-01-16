// Libraries
import express, { json } from "express";
import * as dotenv from "dotenv";
import ejs from "ejs";
import path from "path";

// Routes
import indexRouter from "./routes";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// Configs
dotenv.config();

app.use(json());
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// Routers
app.use("/", indexRouter);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
