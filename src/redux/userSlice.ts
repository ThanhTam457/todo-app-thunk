import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { merge } from "lodash";

const initialState = {
    id: null,
    name: "",
    email: "",
    password: "",
    tasks: [],
    count: 0,
} as UserSliceState


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action:PayloadAction<Partial<UserSliceState>>) => {
            return merge(state, action.payload);
        },
        addTasks: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
            state.count +=1;
        },
        removeTask: (state, action: PayloadAction<number>)=>{
            const taskId = action.payload;
            state.tasks = state.tasks.filter((item)=>
            item._id !== taskId)
            state.count -=1;
        },
    },
});


export const { addUser, addTasks, removeTask} = userSlice.actions;
export const userReducer = userSlice.reducer;


