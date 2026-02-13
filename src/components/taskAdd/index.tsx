import React from "react"
import {Button} from "components/button"

export const TaskAdd: React.FC = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="type your task..."
        aria-label="Text input"
      />
      <Button displayType="regular" title="Add" />
    </form>
  )
}
