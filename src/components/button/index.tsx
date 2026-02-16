import React from "react"
import * as styles from "./styles.module.css"

interface ButtonProps {
  displayType: "regular" | "action" | "filter"
  title: string
  onClick?: () => void
  isActive?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  displayType,
  title,
  onClick,
  isActive
}) => {
  return (
    <button
      className={`${styles[displayType]} ${isActive ? styles.active : ""}`}
      onClick={onClick}>
      {title}
    </button>
  )
}
