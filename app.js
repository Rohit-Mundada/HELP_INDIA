toggleModal = () => {
  let modal = document.getElementById("pre-registration-modal");

  let button = document.getElementById("pre-registration-button");

  let close = document.getElementsByClassName("close")[0];

  button.onclick = () => {
    modal.style.display = "block";
  };

  close.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
};

toggleModal();
