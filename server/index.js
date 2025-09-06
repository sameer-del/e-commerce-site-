const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const port = process.env.PORT;
const routes = require("./routes/routes.js");

/* mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log("error connecting", err);
  }); */

const app = express();
app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
  console.log("listening on port" + " " + port);
});
