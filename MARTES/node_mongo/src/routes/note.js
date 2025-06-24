const express = require("express");
const router = express.Router();

router.get("/notes", (req, res) => {
  res.send("estas en la seccion notes");
});

module.exports = router;
