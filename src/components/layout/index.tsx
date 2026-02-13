import React from "react";

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
      <header>
      <h1>ToDo list</h1>
      <span>chat-app test task</span>
    </header>
    <main>
      {children}
    </main>
    </div>
  )
}
