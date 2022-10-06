import {createSlice} from "@reduxjs/toolkit"
import {v4 as uuidv4} from "uuid"

const initialState = {
  tasks: [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: (state, {payload}) => {
      if (payload.isChecked) {
        state.tasks = state.tasks.filter(currentTask => currentTask.id !== payload.id)
      }
    },
    addTask: (state, {payload}) => {
      state.tasks = [...state.tasks, {title: payload, id: uuidv4(), isChecked: false}]
    },
    selectTask: (state, {payload}) => {
      state.tasks = state.tasks.map(currentTask => {
        if (payload.id === currentTask.id) {
          currentTask.isChecked = !payload.isChecked
        }
        return currentTask
      })
    },
  },
})

export const {removeTask, addTask, selectTask} = tasksSlice.actions

export const selectTasks = (state) => state.tasks.tasks;

export default tasksSlice.reducer