import { createAppAsyncThunk } from "./createAppAsyncThunk";
import db from "../database/db.config";

export const addUserAsync = createAppAsyncThunk(
    'user/addUser',
    async (user: User) => {
        const { id, name, email, password } = user;
        const newUser = {
            id,
            name,
            email,
            password,
        };
        try{
            await db.userDatabase.add(newUser);
        }catch (error) {
            console.error("Error adding user:", error);
            // Handle the error appropriately
        }

        return newUser;
    },
);

export const addTaskAsync = createAppAsyncThunk(
    'task/addTask',
    async (task: Task) =>{
        const {name, _id, userId} = task;
        const newTask = {
            name,
            _id,
            userId
        };
        try{
            await db.taskDatabase.add(newTask);
        }catch (error){
            console.error('Error adding task:', error);
            
        }

        return newTask;
    }
);

export const deleteTaskAsync = createAppAsyncThunk(
    'task/deleteTask',
    async (task: Task) => {
        await db.taskDatabase.delete(task._id);
        return task;
    }
);




