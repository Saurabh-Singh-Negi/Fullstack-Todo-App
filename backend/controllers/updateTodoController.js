const Todo = require("../model/todoModel");

exports.updateTodo = async (req, res) => {
    try {
        const newTodo = await Todo.findByIdAndUpdate(req.params.id, req.body); 
        res.status(200).json({
            message: "Todo updated!",
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: "not able to update"
        })
    }
    
}