// Libraries importing
import express, { json } from "express";
import * as dotenv from "dotenv";
import ejs from "ejs";
import path from "path";

// Routes importing
import indexRouter from "./routes";

// App initialization
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// App configuration
dotenv.config();
app.use(json());
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(path.resolve(__dirname, "public")));

// Routes applying
app.use("/", indexRouter);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
