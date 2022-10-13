import {configureStore} from "@reduxjs/toolkit";
import {tasksApi} from './api/tasksApi'
import tasksReducer from './slices/tasks'

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        [tasksApi.reducerPath]: tasksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tasksApi.middleware)
})