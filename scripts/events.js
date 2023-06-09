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
      newTodo.id = listOfTodos[i].key;

      if (listOfTodos[i].isChecked) {
        newTodo.innerHTML = `<img class="box mr-20" src="assets/checked.svg" />
                             <textarea class="font-m text-secondary"
                             placeholder="Enter a to-do"></textarea>
                             <img class="delete" src="assets/cross.svg" />`;
        newTodo.children[1].classList.add("strike");
        newTodo.children[1].classList.add("text-gray-1");
      } else {
        newTodo.innerHTML = `<img class="box mr-20" src="assets/uncheck.svg" />
                             <textarea class="font-m text-secondary"
                             placeholder="Enter a to-do"></textarea>
                             <img class="delete" src="assets/cross.svg" />`;
      }

      newTodo.children[1].value = listOfTodos[i].value;

      button.insertAdjacentElement("beforebegin", newTodo);
    }
  }
  return;
}

function saveTodo(id, eValue, check) {
  if (listOfTodos.length > 0) {
    for (let i = 0; i < listOfTodos.length; i++) {
      if (listOfTodos[i].key === id) {
        listOfTodos[i].value = eValue;
        listOfTodos[i].isChecked = check;
        localStorage.setItem("list-of-todos", JSON.stringify(listOfTodos));
        return;
      }
    }
  }

  listOfTodos.push({ key: id, value: eValue, check });
  localStorage.setItem("list-of-todos", JSON.stringify(listOfTodos));
}

// check, uncheck transition
addGlobalEventListener("click", ".box", (e) => {
  const link = e.target.src;
  if (link.includes("uncheck")) {
    e.target.src = "assets/checked.svg";
    saveTodo(
      e.target.parentElement.id,
      e.target.parentElement.children[1].value,
      true
    );
  } else if (link.includes("checked")) {
    e.target.src = "assets/uncheck.svg";
    saveTodo(
      e.target.parentElement.id,
      e.target.parentElement.children[1].value,
      false
    );
  }

  e.target.parentElement.children[1].classList.toggle("strike");
  e.target.parentElement.children[1].classList.toggle("text-gray-1");
});

// delete
addGlobalEventListener("click", ".delete", (e) => {
  let index = 0;

  for (let i = 0; i < listOfTodos.length; i++) {
    if (listOfTodos[i].key === e.target.parentElement.id) {
      index = i;
      break;
    }
  }

  listOfTodos.splice(index, 1);
  e.target.parentElement.remove();
  localStorage.setItem("list-of-todos", JSON.stringify(listOfTodos));
});

// save text
addGlobalEventListener("keyup", "textarea", (e) => {
  const id = e.target.parentElement.id;

  const isChecked = JSON.parse(e.target.parentElement.dataset.checked);

  saveTodo(id, e.target.value, isChecked);
});

loadTodos();
