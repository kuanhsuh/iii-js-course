class Modal {
  constructor() {
    this.modalBtns = document.querySelectorAll("#myBtn");
    this.closeBtns = document.querySelectorAll(".close");
    this.events();
  }

  events() {
    this.modalBtns .forEach((modalBtn) => {
        modalBtn.addEventListener('click', event => this.openModal(event))
    })

    this.closeBtns .forEach((closeBtn) => {
        closeBtn.addEventListener('click',(event) => {
        this.closeModal(event)
        })
    })

    window.onclick = (event) => {
      if(event.target.id === "myModal") {
          event.target.classList.toggle('hidden');
      }
}


  }

  openModal(event) {
    event.target.nextElementSibling.classList.toggle('hidden')

  }

  closeModal(event) {
    event.target.parentElement.parentElement.classList.toggle('hidden');
  }
}

export default Modal;

