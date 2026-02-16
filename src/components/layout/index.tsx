import React from "react"
import * as styles from "./styles.module.css"

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.container}>
      <header>
        <h1>ToDo list</h1>
        <span>chat-app test task</span>
      </header>
      <main>{children}</main>
    </div>
  )
}
