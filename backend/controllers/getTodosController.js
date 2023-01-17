const Todo = require("../model/todoModel")

exports.getTodos = async(req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({
            success: true,
            todos
        })
    
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })        
    }
    

}