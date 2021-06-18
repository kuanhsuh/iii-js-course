class Dropdown {
  constructor() {
    this.dropdownItems = document.querySelectorAll(".dropdown");
    this.events();
  }

  events() {
    this.dropdownItems.forEach((element) => {
      element.addEventListener('click', (event) => {
        this.toggleDropdown(event)
      })
    })
  }

  toggleDropdown(event) {
    event.target.children[0].classList.toggle('rot-90')
    event.target.nextElementSibling.classList.toggle('hidden')
  }
}

export default Dropdown;
