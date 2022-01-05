"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({
        message: 'Todo Created',
        data: newTodo
    });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(200).json({
        message: 'All Todo Fetched',
        data: TODOS
    });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const text = req.body.text;
    const id = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Could not find todo');
    }
    TODOS[todoIndex] = new todo_1.Todo(id, text);
    res.status(200).json({
        message: 'Todo Updated',
        data: TODOS[todoIndex]
    });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const id = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Todo not found');
    }
    else {
        TODOS.splice(todoIndex, 1);
    }
    res.status(200).json({
        message: 'Todo Deleted'
    });
};
exports.deleteTodo = deleteTodo;
