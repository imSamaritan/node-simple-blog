const helmet = require("helmet");
const express = require("express");

//App
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(helmet());

//Routes
app.get("/", (req, res) => {
  return res.send("HEllow Wold");
});

//Started server
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
