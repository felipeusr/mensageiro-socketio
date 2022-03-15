const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/page/index.html");
});

module.exports = app;