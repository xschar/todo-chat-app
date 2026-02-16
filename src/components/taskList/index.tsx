import React from "react"
import {useAppSelector} from "store/hooks"
import {Task} from "components/task"

export const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.item)
  const {item, filter} = useAppSelector((state) => state.tasks)
  const filteredTasks = item.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })
  return (
    <div>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </div>
  )
}
