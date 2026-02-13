import React from "react";

export const AddTask: React.FC = () => {
  return(
    <form>
      <input
        type="text"
        placeholder="type your task..."
        aria-label="Text input"
      />
      <button>
        Add
      </button>
    </form>
  )
}
