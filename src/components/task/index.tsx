import React from "react"
import {Button} from "components/button"
import {useAppDispatch} from "store/hooks"
import {deleteTask} from "store/taskSlice"

interface TaskProps {
  id: string
  title: string
}

export const Task: React.FC<TaskProps> = ({id, title}) => {
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(deleteTask(id))
  }
  return (
    <div>
      <input type="checkbox" />
      <span>{title}</span>
      <Button displayType="action" title="Edit"></Button>
      <Button
        displayType="action"
        title="Delete"
        onClick={handleDelete}></Button>
    </div>
  )
}
