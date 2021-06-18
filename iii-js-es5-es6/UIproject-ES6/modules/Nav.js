class Nav {
  constructor() {
    this.toggleMenu = document.querySelectorAll("#toggleMenu");
    this.navMenu = document.querySelector("#responsive");
    this.events();
  }

  events() {
    // EventHandler
    this.toggleMenu.forEach((toggleMenuElement) => {
      toggleMenuElement.addEventListener('click', () => {
        this.toggleMenuAction();
      })
    })
  }

  toggleMenuAction() {
    this.navMenu.classList.toggle("hidden");
  }
}

export default Nav;

// var nav = new Nav()
