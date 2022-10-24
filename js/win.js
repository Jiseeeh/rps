const modalRoot = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");

// Listener for the modal to stay even when clicked
modal.addEventListener("click", preventModalClick);

// Removes the modal when the root was clicked
modalRoot.addEventListener("click", () => {
  modalRoot.classList.remove("visible");
});

// Prevents the exit of modal when being clicked
function preventModalClick(e) {
  e.stopImmediatePropagation();
}
