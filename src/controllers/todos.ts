import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as { text: string }).text;
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(201).json({
        message: 'Todo Created',
        data: newTodo
    })
}

export const getTodos: RequestHandler = (req, res, next) => {
    res.status(200).json({
        message: 'All Todo Fetched',
        data: TODOS
    })
}

export const updateTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as { text: string }).text;
    const id = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Could not find todo');
    }
    TODOS[todoIndex] = new Todo(id, text)

    res.status(200).json({
        message: 'Todo Updated',
        data: TODOS[todoIndex]
    })
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    const id = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Todo not found')
    }
    else {
        TODOS.splice(todoIndex, 1)
    }
    res.status(200).json({
        message: 'Todo Deleted'
    })
}


