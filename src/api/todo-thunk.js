import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/getAll",async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = res.json();
    return todos;
})