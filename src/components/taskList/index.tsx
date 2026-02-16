import React, {useState, useMemo} from "react"
import {useAppSelector} from "store/hooks"
import {Task} from "components/task"
import {useAppDispatch} from "store/hooks"
import {reorderTasks} from "store/taskSlice"
import * as styles from "./styles.module.css"

export const TaskList: React.FC = () => {
  const [draggedId, setDraggedId] = useState<string | null>(null)
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state) => state.tasks.items)
  const {items, filter} = useAppSelector((state) => state.tasks)
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "active":
        return items.filter((t) => !t.completed)
      case "completed":
        return items.filter((t) => t.completed)
      default:
        return items
    }
  }, [items, filter])

  if (filteredTasks.length === 0) {
    return <p className={styles.noTasks}>No tasks found</p>
  }

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
    <div className={styles.container}>
      {filteredTasks.map((task) => (
        <div
          className={styles.draggableItem}
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
