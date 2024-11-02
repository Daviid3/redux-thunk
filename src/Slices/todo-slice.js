import {createSlice} from '@reduxjs/toolkit'
import { fetchTodos } from '../api/todo-thunk'

const initialstate = {
    todos: [],
    error: null,
    status: "idle",
}

const todoSlice = createSlice ({
    name: "todoState",
    initialState:initialstate,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending, (state)=>{
            state.status = "loading";
        }).addCase(fetchTodos.fulfilled, (state, action)=>{
            state.status=  "succeded";
            state.todos= action.payload;
        }).addCase(fetchTodos.rejected, (state,action)=>{
            state.status= "failed" 
            state.todos= action.payload;
    
        })
    }
})

export default todoSlice.reducer;