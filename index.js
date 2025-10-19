const helmet = require("helmet");
const homeRouter = require("./routes/home/home");
const blogRouter = require("./routes/blogs/blog");
const express = require("express");

//App
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));

//Views
app.set("view engine", "ejs");
app.set("views", "pages");

//Routes
app.use("/", homeRouter);
app.use("/blogs", blogRouter);

//Started server
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
