import React, {useState} from "react"
import {useAppSelector} from "store/hooks"
import {Task} from "components/task"
import {useAppDispatch} from "store/hooks"
import {reorderTasks} from "store/taskSlice"

export const TaskList: React.FC = () => {
  const [draggedId, setDraggedId] = useState<string | null>(null)
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state) => state.tasks.items)
  const {items, filter} = useAppSelector((state) => state.tasks)
  const filteredTasks = items.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  const handleDragStart = (id: string) => {
    setDraggedId(id)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (id: string) => {
    if (!draggedId || draggedId === id) return

    dispatch(
      reorderTasks({
        fromId: draggedId,
        toId: id
      })
    )

    setDraggedId(null)
  }
  return (
    <div>
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          draggable
          onDragStart={() => handleDragStart(task.id)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(task.id)}>
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
          />
        </div>
      ))}
    </div>
  )
}
