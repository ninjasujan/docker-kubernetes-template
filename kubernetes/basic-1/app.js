const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("health OK");
});

app.listen(8080, () => {
  console.log("server running...");
});
