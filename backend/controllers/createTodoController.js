const Todo = require("../model/todoModel");

exports.home = (req, res) => {
    res.send("hello world. This is a MERN TODO APP");
};

exports.createTodo = async (req, res) => {
    try {
        const {title} = req.body;
        
        const newTodo = new Todo({
            title: title
        }) 
    
        if(!title) {
            throw new Error("Please enter the title"); 
        }

        const saveTodo = await newTodo.save()
        res.status(201).json({
            success: true,
            saveTodo
        })

    } catch(error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
    
}

