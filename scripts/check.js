function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

addGlobalEventListener("click", ".box", (e) => {
  const link = e.target.src;
  if (link.includes("uncheck")) {
    e.target.src = "assets/check.svg";
    e.target.parentElement.children[1].classList.add("strike", "text-gray-1");
  } else if (link.includes("check")) {
    e.target.src = "assets/uncheck.svg";
    e.target.parentElement.children[1].classList.remove(
      "strike",
      "text-gray-1"
    );
  }
});
