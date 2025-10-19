const helmet = require("helmet");
const express = require("express");

//App
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(helmet());

//Views
app.set("view engine", "ejs");
app.set("views", "pages");

//Routes
app.get("/", (req, res) => {
  return res.render("index", { title: "Blog - Home", message: "Hellow World" });
});

//Started server
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
