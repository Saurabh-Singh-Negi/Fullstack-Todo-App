require('dotenv').config();
const todoRoutes = require("./routes/todoRoutes");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", todoRoutes);

module.exports = app;

