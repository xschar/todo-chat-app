import React from "react"
import * as styles from "./styles.module.css"

interface ButtonProps {
  displayType: "regular" | "action" | "filter"
  title: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  displayType,
  title,
  onClick
}) => {
  return (
    <button className={styles[displayType]} onClick={onClick}>
      {title}
    </button>
  )
}
