import React from "react"
import {Button} from "components/button"
import {useAppDispatch, useAppSelector} from "store/hooks"
import {setFilter} from "store/taskSlice"
import * as styles from "./styles.module.css"

export const TaskFilter: React.FC = () => {
  const dispatch = useAppDispatch()
  const currentFilter = useAppSelector((state) => state.tasks.filter)

  return (
    <div className={styles.container}>
      <Button
        displayType="filter"
        title="All"
        onClick={() => dispatch(setFilter("all"))}
        isActive={currentFilter === "all"}
      />
      <Button
        displayType="filter"
        title="Active"
        onClick={() => dispatch(setFilter("active"))}
        isActive={currentFilter === "active"}
      />
      <Button
        displayType="filter"
        title="Completed"
        onClick={() => dispatch(setFilter("completed"))}
        isActive={currentFilter === "completed"}
      />
    </div>
  )
}
