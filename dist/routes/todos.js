"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("./../controllers/todos");
const route = (0, express_1.Router)();
route.get('/', todos_1.getTodos);
route.post('/', todos_1.createTodo);
route.patch('/:id', todos_1.updateTodo);
route.delete('/:id', todos_1.deleteTodo);
exports.default = route;
// import { Router } from 'express';
// import { createTodo, getTodos, updateTodos, deleteTodo} from '../controllers/todos'
// const router = Router();
// router.get('/',getTodos, ()=>{
// })
// router.post('/',createTodo, ()=>{
// })
// router.patch('/:id',updateTodos,()=>{
// })
// router.delete('/',deleteTodo,()=>{
// })
// export default router
