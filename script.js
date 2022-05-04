const openModal = document.querySelector("[data-open]");
const modalContainer = document.querySelector("[data-mc]");
const closeModal = document.querySelector("[data-close]");

openModal.addEventListener("click", () => {
  modalContainer.classList.add("show");
});
closeModal.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

window.onclick = (e) => {
  if (e.target == modalContainer) {
    modalContainer.classList.remove("show");
  }
};
