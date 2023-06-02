const listOfTodos = localStorage.getItem("list-of-todos")
  ? JSON.parse(localStorage.getItem("list-of-todos"))
  : [];

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

function loadTodos() {
  if (listOfTodos.length > 0) {
    for (let i = 0; i < listOfTodos.length; i++) {
      const newTodo = document.createElement("div");
      newTodo.classList.add("todo", "flex", "ai-fs", "pb-36", "jc-sb");
      newTodo.id = crypto.randomUUID();

      newTodo.innerHTML = ` <img class="box mr-20" src="assets/uncheck.svg" />
                        <textarea class="font-m text-secondary"
                        placeholder="Enter a to-do"></textarea>
                        <img class="delete" src="assets/cross.svg" />`;

      newTodo.children[1].value = listOfTodos[i].value;

      button.insertAdjacentElement("beforebegin", newTodo);
    }
  }
  return;
}

// check, uncheck transition
addGlobalEventListener("click", ".box", (e) => {
  const link = e.target.src;
  if (link.includes("uncheck")) {
    e.target.src = "assets/check.svg";
  } else if (link.includes("check")) {
    e.target.src = "assets/uncheck.svg";
  }
  e.target.parentElement.children[1].classList.toggle("strike");
  e.target.parentElement.children[1].classList.toggle("text-gray-1");
});

// delete
addGlobalEventListener("click", ".delete", (e) => {
  e.target.parentElement.remove();
  todos.splice(todos.indexOf(e.target.parentElement), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
});

// save text
addGlobalEventListener("keyup", "textarea", (e) => {
  const id = e.target.parentElement.id;

  if (listOfTodos.length > 0) {
    for (let i = 0; i < listOfTodos.length; i++) {
      if (listOfTodos[i].key === id) {
        listOfTodos[i].value = e.target.value;
        localStorage.setItem("list-of-todos", JSON.stringify(listOfTodos));
        return;
      }
    }
  }
  listOfTodos.push({ key: id, value: e.target.value });
  localStorage.setItem("list-of-todos", JSON.stringify(listOfTodos));
});

loadTodos();
