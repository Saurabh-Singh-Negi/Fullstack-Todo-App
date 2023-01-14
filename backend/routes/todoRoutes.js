const express = require("express");
const router = express.Router();
const { home, createTodo } = require("../controllers/createTodoController")


router.post("/createTodo", createTodo);

module.exports = router;