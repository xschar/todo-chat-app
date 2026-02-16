import React from "react"
import {Button} from "components/button"
import {useAppDispatch} from "store/hooks"
import {setFilter} from "store/taskSlice"

export const TaskFilter: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <Button
        displayType="regular"
        title="All"
        onClick={() => dispatch(setFilter("all"))}></Button>
      <Button
        displayType="regular"
        title="Active"
        onClick={() => dispatch(setFilter("active"))}></Button>
      <Button
        displayType="regular"
        title="Complete"
        onClick={() => dispatch(setFilter("completed"))}></Button>
    </div>
  )
}
