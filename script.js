let input = document.getElementById("input");
let addTask = document.getElementById("addTask");
let todoOutput = document.getElementById("todoOutput");

addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${input.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  checkButton.classList.add("check");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("delete");
  task.appendChild(deleteButton);

  if (input.value === "") {
    alert("Your Input Is Empty. Can you please enter an activity to continue?");
  } else {
    todoOutput.appendChild(task);
  }

  input.value = "";

  let cross = "checked";
  checkButton.addEventListener("click", function () {
    if (cross === "checked") {
      checkButton.parentElement.style.textDecoration = "line-through";
      cross = "unchecked";
    } else {
      checkButton.parentElement.style.textDecoration = "none";
      cross = "checked";
    }
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
  });
});
