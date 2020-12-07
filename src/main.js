import { formSubmission } from "./helper/formSubmission.js";

window.onload = () => {
  document.forms.taskList.addEventListener("submit", formSubmission);
  //   document.getElementById("todo-list").addEventListener("click", deleteCheck);
  //   document.getElementById("todo-filter").addEventListener("change", filterTodo);
};
