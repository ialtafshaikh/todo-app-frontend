import { endpoint } from "../endpoints.js";
import { renderTodo } from "./renderTodo.js";

export const filterUncompleted = () => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + document.cookie.split("=")[1]);
  fetch(endpoint, { headers: myHeaders })
    .then((response) => response.json())
    .then(({ todos }) => {
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
