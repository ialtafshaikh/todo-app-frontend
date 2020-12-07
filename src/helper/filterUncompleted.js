import { endpoint } from "../endpoints.js";
import { renderTodo } from "./renderTodo.js";

export const filterUncompleted = () => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((todos) => {
      const uncompletedTodos = todos.filter((todo) => {
        return todo.completed == false;
      });
      document.getElementById("todo-list").textContent = "";
      uncompletedTodos.forEach((todo) => {
        renderTodo(todo);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
