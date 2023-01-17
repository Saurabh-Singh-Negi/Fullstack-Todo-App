const express = require("express");
const router = express.Router();
const { home, createTodo } = require("../controllers/createTodoController")
const { deleteTodo } = require("../controllers/deleteTodoController")
const { getTodos } = require("../controllers/getTodosController")
const { updateTodo } = require("../controllers/updateTodoController")

router.get("/", home);
router.post("/createTodo", createTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.get("/getTodos", getTodos);
router.put("/updateTodo/:id", updateTodo);


module.exports = router;