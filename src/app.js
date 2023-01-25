// Libraries importing
import express, { json } from "express";
import * as dotenv from "dotenv";
import ejs from "ejs";
import path from "path";

// Routes importing
import indexRouter from "./routes";
import adminRouter from "./routes/admin";
import adminCaThiRouter from "./routes/admin/cathi";

// App initialization
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// App configuration
dotenv.config();
app.use(json());
var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const publicRouter = express.static(path.join(__dirname, "public"))
app.use(publicRouter);

app.use(bodyParser.urlencoded({extended:true})); 




// Routes applying
app.use("/", indexRouter);
app.use("/admin", adminRouter,publicRouter);
app.use("/admin/cathi",adminCaThiRouter,publicRouter)
// Routes Api


app.listen(PORT, () => console.log(`App listening at port ${PORT}`));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });