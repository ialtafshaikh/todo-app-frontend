import { inputValidation } from "./inputValidation.js";
import { renderTodo } from "./renderTodo.js";

export const createTodo = (text) => {
  //validation
  if (inputValidation(text)) {
    renderTodo(todoObj);
    //store the task
  }
};
