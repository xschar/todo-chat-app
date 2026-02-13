import React from "react"
import {Button} from "components/button"

interface TaskProps {
  title: string
}

export const Task: React.FC<TaskProps> = ({title}) => {
  return (
    <div>
      <input type="checkbox" />
      <span>{title}</span>
      <Button displayType="action" title="Edit"></Button>
      <Button displayType="action" title="Delete"></Button>
    </div>
  )
}
