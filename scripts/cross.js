function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

addGlobalEventListener("mouseover", ".todo", (e) => {
  e.target.lastElementChild.classList.toggle("show");
  e.stopPropagation();
});
