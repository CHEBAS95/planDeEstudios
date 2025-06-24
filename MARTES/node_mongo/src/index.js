const express = require("express");
const path = require("path");
const app = express();
const exphbs = require("express-handlebars");
const session = require("express-session");

//init
require("./database");

//setting
const css = app.use(express.static(path.join(__dirname, "public")));
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutDir: path.join(app.get("views"), "layouts"),
    partialDir: path.join(app.get("views"), "partial"),
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

//middelewares antes de que llegue al servidor
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secr3t",
    name: "sessionId",
    resave: true,
    saveUninitialized: true,
  })
);
//global variables

//routes
app.use(require("./routes/index"));
app.use(require("./routes/note"));
app.use(require("./routes/user"));

//staitc file
app.use(express.static(path.join(__dirname, "public")));
//server is listen
app.listen(app.get("port"), () => {
  console.log("server is ok : ", app.get("port"));
  
});
