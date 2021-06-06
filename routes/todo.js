const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo');

router.route('/')
    .get(todoController.getAllTodo)
    .post(todoController.postTodo);

router.route('/:todoId')
    .get(todoController.getTodoById)
    .put(todoController.updateTodo)
    .delete(todoController.deleteTodo);

module.exports = router;
