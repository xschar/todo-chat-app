import {configureStore} from "@reduxjs/toolkit"
import taskReducer from "./taskSlice"
import {loadState, saveState} from "./localStorage"

const preloadedState = loadState()

export const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
  preloadedState: preloadedState ? {tasks: preloadedState} : undefined
})

store.subscribe(() => {
  const state = store.getState()
  saveState(state.tasks)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
