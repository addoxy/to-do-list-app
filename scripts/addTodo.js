const button = document.querySelector("button");

const addTodo = () => {
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo", "flex", "ai-fs", "pb-36", "jc-sb");
  newTodo.id = crypto.randomUUID();
  newTodo.dataset.checked = false;

  newTodo.innerHTML = ` <img class="box mr-20" src="assets/uncheck.svg" />
                        <textarea class="font-m text-secondary"
                        placeholder="Enter a to-do"></textarea>
                        <img class="delete" src="assets/cross.svg" />`;

  button.insertAdjacentElement("beforebegin", newTodo);

  saveTodo(newTodo.id, "", newTodo.dataset.checked);
};

button.addEventListener("click", addTodo);
