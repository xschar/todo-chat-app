import React from "react"
import {Button} from "components/button"

export const TaskFilter: React.FC = () => {
  return (
    <div>
      <Button displayType="regular" title="All"></Button>
      <Button displayType="regular" title="Active"></Button>
      <Button displayType="regular" title="Complete"></Button>
    </div>
  )
}
