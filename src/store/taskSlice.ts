import {createSlice, type PayloadAction, nanoid} from "@reduxjs/toolkit"

interface Task {
  id: string
  title: string
}

interface TaskState {
  item: Task[]
}

const initialState: TaskState = {
  item: []
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.item.push(action.payload)
      },
      prepare(title: string) {
        return {
          payload: {
            id: nanoid(),
            title
          }
        }
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.item = state.item.filter((task) => task.id !== action.payload)
    }
  }
})

export const {addTask, deleteTask} = taskSlice.actions
export default taskSlice.reducer
