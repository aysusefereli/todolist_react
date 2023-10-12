import { configureStore } from '@reduxjs/toolkit'
import Reducer from './slices/todolist'

export const store = configureStore({
  reducer: {
    todolist: Reducer
  },
})