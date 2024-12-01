const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("hello from express app");
    next();
});

app.use((req, res, next) => {
    res.send("Hello from response");
});

module.exports = app;