import React from "react"
import "styles/global.css"
import { Layout } from "components/layout"
import { AddTask } from "components/addTask"
import { FilterTask } from "components/filterTask"

export const App: React.FC = () => {
  return (
    <Layout>
      <AddTask />
      <FilterTask />
    </Layout>
  )
}
