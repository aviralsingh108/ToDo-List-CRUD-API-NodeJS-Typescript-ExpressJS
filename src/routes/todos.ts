import { Router } from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from './../controllers/todos'
const route = Router()

route.get('/', getTodos)

route.post('/', createTodo)

route.patch('/:id', updateTodo)

route.delete('/:id', deleteTodo)

export default route;





























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
