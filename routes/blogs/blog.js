const express = require("express");

const router = express.Router();

// Display all blogs page
router.get("/", (req, res) => {
  return res.render("blogs", { title: "Blogs" });
});

//Create post form
router.get("/create", (req, res) => {
  return res.render("create", { title: "Blog - Create" });
});

//Create post
router.post("/create", (req, res) => {
  console.log(req.body);
});

//Edit
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
});

//Delete
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
});

module.exports = router;
