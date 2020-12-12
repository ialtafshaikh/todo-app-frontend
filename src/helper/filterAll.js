import { endpoint } from "../endpoints.js";
import { renderTodo } from "./renderTodo.js";

export const filterAll = () => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + document.cookie.split("=")[1]);
  fetch(endpoint, { headers: myHeaders })
    .then((response) => response.json())
    .then(({ todos }) => {
      document.getElementById("todo-list").textContent = "";
      todos.forEach((todo) => {
        renderTodo(todo);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
