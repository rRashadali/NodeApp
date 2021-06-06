const Todo = require('../models/todo');

exports.getAllTodo = async (req, res, next) => {
    const returnObj={};
    const todo = await Todo.find({ createdBy: req.user.id });
    returnObj.status="true";
    returnObj.data=todo;
    res.status(200).json(returnObj);
};

exports.postTodo = async (req, res, next) => {
    const returnObj={};
    const newtodo = new Todo(req.body);
    newtodo.createdBy = req.user.id;
    try {
        const todo = await newtodo.save();
        returnObj.status="true";
        returnObj.data=todo;
        res.status(201).json(todo);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

exports.getTodoById = async (req, res, next) => {
    const { todoId } = req.params;
    const returnObj={};
    try {
        const todo = await Todo.findById(todoId);
        returnObj.status="true";
        returnObj.data=todo;
        
        res.status(200).json(returnObj);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

exports.updateTodo = async (req, res, next) => {
    const { todoId } = req.params;
    try {
        await Todo.findByIdAndUpdate(todoId, req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

exports.deleteTodo = async (req, res, next) => {
    const { todoid } = req.params;
    
    try {
        await Todo.findByIdAndRemove(todoid);
        res.status(200).json({ success: true });
    } catch (error) {
        error.status = 400;
        next(error);
    }
};
