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
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + document.cookie.split("=")[1]);

  fetch(endpoint, { headers: myHeaders, mode: "cors" })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      window.location.href = "http://127.0.0.1:5500/todo-frontend/login.html";
      throw new Error("Please Login to continue");
    })
    .then(({ todos, currentUser }) => {
      document.getElementById("userTitle").textContent =
        currentUser.firstName[0].toUpperCase() +
        currentUser.firstName.slice(1) +
        "'s Todo List";
      todos.forEach((todo) => {
        renderTodo(todo);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
