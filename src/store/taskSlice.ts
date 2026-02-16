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

export interface TaskState {
  items: Task[]
  filter: Filter
}

const initialState: TaskState = {
  items: [],
  filter: "all"
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.items.push(action.payload)
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
      state.items = state.items.filter((task) => task.id !== action.payload)
    },
    toggleTask(state, action: PayloadAction<string>) {
      const task = state.items.find((task) => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    setFilter(state, action: PayloadAction<Filter>) {
      state.filter = action.payload
    },
    updateTask(state, action: PayloadAction<UpdateTaskPayload>) {
      const task = state.items.find((task) => task.id === action.payload.id)

      if (task) {
        task.title = action.payload.title
      }
    },
    reorderTasks(state, action: PayloadAction<{fromId: string; toId: string}>) {
      const {fromId, toId} = action.payload

      const fromIndex = state.items.findIndex((t) => t.id === fromId)
      const toIndex = state.items.findIndex((t) => t.id === toId)

      if (fromIndex === -1 || toIndex === -1) return

      const [moved] = state.items.splice(fromIndex, 1)
      state.items.splice(toIndex, 0, moved)
    }
  }
})

export const {
  addTask,
  deleteTask,
  toggleTask,
  setFilter,
  updateTask,
  reorderTasks
} = taskSlice.actions
export default taskSlice.reducer
