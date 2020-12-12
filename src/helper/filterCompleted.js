import { endpoint } from "../endpoints.js";
import { renderTodo } from "./renderTodo.js";

export const filterCompleted = () => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + document.cookie.split("=")[1]);
  fetch(endpoint, { headers: myHeaders })
    .then((response) => response.json())
    .then(({ todos }) => {
      const completedTodos = todos.filter((todo) => {
        return todo.completed == true;
      });
      document.getElementById("todo-list").textContent = "";
      completedTodos.forEach((todo) => {
        renderTodo(todo);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
