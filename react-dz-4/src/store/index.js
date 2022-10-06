import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from './slices/tasks'

export default configureStore({
    reducer: {
        tasks: tasksReducer
    }
})