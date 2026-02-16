import React, {useState} from "react"
import {Button} from "components/button"
import {useDispatch} from "react-redux"
import {addTask} from "store/taskSlice"

export const TaskAdd: React.FC = () => {
  const [value, setValue] = useState<string>("")
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!value.trim()) return

    dispatch(addTask(value))
    setValue("")
  }

  return (
    <form name="addTask" onSubmit={handleSubmit}>
      <input
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
