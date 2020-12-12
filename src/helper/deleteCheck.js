import { endpoint } from "../endpoints.js";

export const deleteCheck = (event) => {
  const item = event.target;

  //delete todo from storage and remove from dom
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    const id = todo.id;
    //fall animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });

    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + document.cookie.split("=")[1]
    );

    fetch(endpoint + id, {
      method: "DELETE",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Deleted:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //mark check and update the todo in the storage
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    const id = todo.id;

    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + document.cookie.split("=")[1]
    );
    myHeaders.append("Content-Type", "application/json");

    if (todo.classList.toggle("completed")) {
      const todoObj = { completed: true };

      fetch(endpoint + id, {
        method: "PUT", // or 'PUT'
        headers: myHeaders,
        body: JSON.stringify(todoObj),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      const todoObj = { completed: false };
      fetch(endpoint + id, {
        method: "PUT", // or 'PUT'
        headers: myHeaders,
        body: JSON.stringify(todoObj),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
};
