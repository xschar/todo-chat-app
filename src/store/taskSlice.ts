import {createSlice, type PayloadAction} from "@reduxjs/toolkit"

interface TaskState {
  item: string[]
}

const initialState: TaskState = {
  item: []
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.item.push(action.payload)
    }
  }
})

export const {addTask} = taskSlice.actions
export default taskSlice.reducer
