const express = require("express");
const router = express.Router();
const { createTodo, deleteTodo } = require("../controllers/createTodoController")


router.post("/createTodo", createTodo);
router.delete("/deleteTodo/:id", createTodo);
router.getTodo("/getTodo/:id", getTodo);

module.exports = router;