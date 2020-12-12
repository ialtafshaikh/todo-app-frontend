import { taskConstructor } from "./taskConstructor.js";
import { inputValidation } from "./inputValidation.js";
import { renderTodo } from "./renderTodo.js";
import { endpoint } from "../endpoints.js";

export const createTodo = (text) => {
  //validation
  if (inputValidation(text)) {
    //store the task to the backend db
    const todoObj = new taskConstructor(text);

    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + document.cookie.split("=")[1]
    );
    myHeaders.append("Content-Type", "application/json");

    fetch(endpoint, {
      method: "POST", // or 'PUT'
      headers: myHeaders,
      body: JSON.stringify(todoObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        renderTodo(data["data"]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};
