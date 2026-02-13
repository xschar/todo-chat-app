import React from "react";
import * as styles from "./styles.module.css"


interface ButtonProps {
  displayType: 'regular' | 'action'
  title: string
}

export const Button: React.FC<ButtonProps> = ({displayType, title}) => {
  return (
  <button className={styles[displayType]}>{title}</button>
  )
}
