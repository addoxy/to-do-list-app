function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

addGlobalEventListener("click", ".delete", (e) => {
  e.target.parentElement.remove();
});
