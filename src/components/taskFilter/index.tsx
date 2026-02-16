import React from "react"
import {Button} from "components/button"
import {useAppDispatch} from "store/hooks"
import {setFilter} from "store/taskSlice"
import * as styles from "./styles.module.css"

export const TaskFilter: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.container}>
      <Button
        displayType="filter"
        title="All"
        onClick={() => dispatch(setFilter("all"))}
      />
      <Button
        displayType="filter"
        title="Active"
        onClick={() => dispatch(setFilter("active"))}></Button>
      <Button
        displayType="filter"
        title="Complete"
        onClick={() => dispatch(setFilter("completed"))}></Button>
    </div>
  )
}
