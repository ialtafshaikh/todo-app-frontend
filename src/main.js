import { formSubmission } from "./helper/formSubmission.js";
import { deleteCheck } from "./helper/deleteCheck.js";
import { renderTodo } from "./helper/renderTodo.js";
import { filterTodo } from "./helper/filterTodo.js";
import { endpoint } from "./endpoints.js";

window.onload = () => {
  document.forms.taskList.addEventListener("submit", formSubmission);
  document.getElementById("todo-list").addEventListener("click", deleteCheck);
  document.getElementById("todo-filter").addEventListener("change", filterTodo);
};

//onRefresh => check if todos are present or not
document.addEventListener("DOMContentLoaded", () => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((todos) => {
      todos.forEach((todo) => {
        renderTodo(todo);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
