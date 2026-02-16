import React from "react"
import "styles/global.css"
import {Layout} from "components/layout"
import {TaskAdd} from "components/taskAdd"
import {TaskFilter} from "components/taskFilter"
import {TaskList} from "components/taskList"

export const App: React.FC = () => {
  return (
    <Layout>
      <TaskAdd />
      <TaskFilter />
      <TaskList />
    </Layout>
  )
}
