const button = document.querySelector("button");

const addTodo = () => {
  const newTodo = document.createElement("div");
  newTodo.classList.add("flex", "flex-ai-fs", "mb-36");

  newTodo.innerHTML = ` <img class="box mr-20" src="assets/uncheck.svg" />
                        <textarea class="font-m text-secondary"
                        placeholder="Enter a to-do"></textarea>`;

  button.insertAdjacentElement("beforebegin", newTodo);
};

button.addEventListener("click", addTodo);
