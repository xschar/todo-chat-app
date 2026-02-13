import React from "react"
import {useSelector} from "react-redux"
import {Task} from "components/task"
import type {RootState} from "store/store"

export const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.item)
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} />
      ))}
    </div>
  )
}
