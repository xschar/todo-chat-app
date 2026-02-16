import React from "react"
import {useAppSelector} from "store/hooks"
import {Task} from "components/task"

export const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.item)
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} title={task.title} />
      ))}
    </div>
  )
}
