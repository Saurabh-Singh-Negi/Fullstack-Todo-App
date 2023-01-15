const Todo = require("../model/todoModel")

exports.deleteTodo = async (req, res) => {
    try {
        const todoID = req.params.id;
        const delTodo = Todo.findByIdAndDelete(todoID);

        res.status(200).json({
            success: true,
            message: "Todo deleted successfully"
        });
    } catch(error) {
        res.status(401).json({
            success: false,
            message: error.message
        });
    }    
};