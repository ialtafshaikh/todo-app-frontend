import { endpoint } from "../endpoints.js";
import { renderTodo } from "./renderTodo.js";

export const filterAll = () => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((todos) => {
      document.getElementById("todo-list").textContent = "";
      todos.forEach((todo) => {
        renderTodo(todo);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
