const button = document.querySelector("button");

const addTodo = () => {
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo", "flex", "flex-ai-fs", "pb-36");

  newTodo.innerHTML = ` <img class="box mr-20" src="assets/uncheck.svg" />
                        <textarea class="font-m text-secondary"
                        placeholder="Enter a to-do"></textarea>
                        <img class="delete cross" src="assets/cross.svg" />`;

  button.insertAdjacentElement("beforebegin", newTodo);
};

button.addEventListener("click", addTodo);
