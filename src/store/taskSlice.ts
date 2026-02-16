import {createSlice, type PayloadAction, nanoid} from "@reduxjs/toolkit"

interface Task {
  id: string
  title: string
  completed: boolean
}

type Filter = "all" | "active" | "completed"

interface UpdateTaskPayload {
  id: string
  title: string
}

interface TaskState {
  item: Task[]
  filter: Filter
}

const initialState: TaskState = {
  item: [],
  filter: "all"
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
            title,
            completed: false
          }
        }
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.item = state.item.filter((task) => task.id !== action.payload)
    },
    toggleTask(state, action: PayloadAction<string>) {
      const task = state.item.find((task) => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    setFilter(state, action: PayloadAction<Filter>) {
      state.filter = action.payload
    },
    updateTask(state, action: PayloadAction<UpdateTaskPayload>) {
      const task = state.item.find((task) => task.id === action.payload.id)

      if (task) {
        task.title = action.payload.title
      }
    }
  }
})

export const {addTask, deleteTask, toggleTask, setFilter, updateTask} =
  taskSlice.actions
export default taskSlice.reducer
