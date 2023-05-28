function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

// check, uncheck
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

// hover to show delete
addGlobalEventListener("mouseover", ".todo", (e) => {
  e.stopPropagation();
  e.target.lastElementChild.classList.toggle("show");
});

// delete
addGlobalEventListener("click", ".delete", (e) => {
  e.target.parentElement.remove();
});
