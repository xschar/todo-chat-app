import {type TaskState} from "./taskSlice"

const STORAGE_KEY = "todo_state"

export const loadState = (): TaskState | undefined => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY)
    if (!serializedState) return undefined

    const parsed = JSON.parse(serializedState)

    if (!Array.isArray(parsed.items)) return undefined
    if (typeof parsed.filter !== "string") return undefined

    return parsed as TaskState
  } catch {
    return undefined
  }
}

export const saveState = (state: TaskState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(STORAGE_KEY, serializedState)
  } catch {
    // ignore write errors
  }
}
