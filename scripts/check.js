function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

addGlobalEventListener("click", ".box", (e) => {
  const link = e.target.src;
  if (link.includes("uncheck")) {
    e.target.src = "assets/check.svg";
  } else if (link.includes("check")) {
    e.target.src = "assets/uncheck.svg";
  }
  console.log("hi");
});
