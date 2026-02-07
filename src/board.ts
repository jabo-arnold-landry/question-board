let btnsContainer = document.querySelector(".box") as HTMLDivElement;
const btns = document.querySelectorAll("button");

btnsContainer.addEventListener("click", (e: Event) => {
  if (e.target instanceof HTMLButtonElement) {
    const pragraphs = document.querySelectorAll("p");
    pragraphs.forEach((pElement) => pElement.classList.remove("active"));
    const pragraph = document.getElementById(`${e.target.dataset.target}`);
    pragraph?.classList.toggle("active");
    let indexOfClickedBtn = [...btns].indexOf(e.target);
    activeButton(indexOfClickedBtn);
  }
});

function activeButton(index = 0): void {
  btns.forEach((btn) => (btn.textContent = "-"));
  const activeBtn = btns[index] as HTMLButtonElement;
  activeBtn.textContent = "+";
}

activeButton();
