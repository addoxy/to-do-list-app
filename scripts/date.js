const date = () => {
  const today = new Date();
  const dateFunction = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  });
  const date = dateFunction.format(today);
  return date;
};

const pageDate = document.querySelector(".date");
pageDate.innerText = date();
