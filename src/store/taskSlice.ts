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
    }
  }
})

export const {addTask} = taskSlice.actions
export default taskSlice.reducer
