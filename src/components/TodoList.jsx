import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} index={todoIndex} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
