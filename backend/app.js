require('dotenv').config();
const todoRoutes = require("./routes/todoRoutes");
const express = require("express");
const connectToDB = require("./config/db");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectToDB();
app.use("/", todoRoutes);

module.exports = app;

