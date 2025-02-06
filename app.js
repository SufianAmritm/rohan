const express = require("express");
const router = require("./router/routes/main-route");


const app = express();
require("dotenv").config();
app.use("/api", router);
start = () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server Started on port ${process.env.PORT}`);
  });
};
start();
