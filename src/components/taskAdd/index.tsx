import React, {useState} from "react"
import {Button} from "components/button"
import {useDispatch} from "react-redux"
import {addTask} from "store/taskSlice"
import * as styles from "./styles.module.css"

export const TaskAdd: React.FC = () => {
  const [value, setValue] = useState<string>("")
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmed = value.trim()
    if (!trimmed) return

    dispatch(addTask(trimmed))
    setValue("")
  }

  return (
    <form className={styles.formAdd} name="addTask" onSubmit={handleSubmit}>
      <input
        className={styles.inputTask}
        type="text"
        placeholder="type your task..."
        aria-label="Text input"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <Button displayType="regular" title="Add" />
    </form>
  )
}
