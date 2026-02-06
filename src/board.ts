let btnsContainer = document.querySelector(".box") as HTMLDivElement;

btnsContainer.addEventListener("click", (e: Event) => {
  if (e.target instanceof HTMLButtonElement) {
    const pragraphs = document.querySelectorAll("p");
    pragraphs.forEach((pElement) => pElement.classList.remove("active"));
    const pragraph = document.getElementById(`${e.target.dataset.target}`);
    pragraph?.classList.toggle("active");
  }
});
