const express = require("express");
const cors = require("cors");
const router = express.Router();

const { test, test2 } = require("../controlers/control.js");

// CORS setup
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Route definition
router.get("/", test);
router.post("/data", test2);

module.exports = router;
