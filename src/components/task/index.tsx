import React from "react"
import {Button} from "components/button"

export const Task: React.FC = () => {
  return (
    <div>
      <input type="checkbox" />
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      <Button displayType="action" title="Edit"></Button>
      <Button displayType="action" title="Delete"></Button>
    </div>
  )
}
