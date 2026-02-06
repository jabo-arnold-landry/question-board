let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // document.querySelector(".active")?.classList.toggle("active")
    let pragraph = btn.dataset.target;
    let see = document.getElementById(pragraph);
    see.classList.toggle("active");
    if (see.classList.contains("active")) {
      btn.innerHTML = "-";
    } else {
      btn.innerHTML = "+";
    }
  });
});
