export { modalRoot };
const close = document.querySelector(".close");
const modalRoot = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");

modal.addEventListener("click", preventModalClick);

modalRoot.addEventListener("click", () => {
  modalRoot.classList.remove("visible");
});

function preventModalClick(e) {
  e.stopImmediatePropagation();
}
