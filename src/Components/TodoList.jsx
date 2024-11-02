import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchTodos } from '../api/todo-thunk';

function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todoState.todos);
    console.log(todos);
    useEffect(()=>{
        dispatch(fetchTodos());
    },[])
  return (
    <div>{todos.map((todo)=><div key={todo.id}>{todo.title}</div>)}</div>
  )
}

export default TodoList;