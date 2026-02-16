import React, {useState} from "react"
import {Button} from "components/button"
import {useAppDispatch} from "store/hooks"
import {deleteTask, toggleTask, updateTask} from "store/taskSlice"

interface TaskProps {
  id: string
  title: string
  completed: boolean
}

export const Task: React.FC<TaskProps> = ({id, title, completed}) => {
  const dispatch = useAppDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(title)

  const handleDelete = () => {
    dispatch(deleteTask(id))
  }

  const handleSave = () => {
    dispatch(updateTask({id, title: editValue}))
    setIsEditing(false)
  }

  const handleChecked = () => {
    dispatch(toggleTask(id))
  }

  return (
    <div>
      {isEditing ? (
        <input
          type="checkbox"
          checked={completed}
          onChange={handleChecked}
          disabled
        />
      ) : (
        <input type="checkbox" checked={completed} onChange={handleChecked} />
      )}

      {isEditing ? (
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <span>{title}</span>
      )}
      {isEditing ? (
        <Button displayType="action" title="Save" onClick={handleSave} />
      ) : (
        <Button
          displayType="action"
          title="Edit"
          onClick={() => setIsEditing(true)}
        />
      )}
      {isEditing ? (
        <Button
          displayType="action"
          title="Cancel"
          onClick={() => setIsEditing(false)}
        />
      ) : (
        <Button displayType="action" title="Delete" onClick={handleDelete} />
      )}
    </div>
  )
}
