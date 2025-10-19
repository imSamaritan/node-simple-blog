const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("index", {
    title: "Blog - Home",
    message: "Hello World",
  });
});

module.exports = router;
