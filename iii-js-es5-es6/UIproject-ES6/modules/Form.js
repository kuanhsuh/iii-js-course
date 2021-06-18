class Form {
  constructor() {
    this.form = document.querySelector("#form");
    this.nameField = document.querySelector("#name");
    this.emailField = document.querySelector("#email");
    this.msgField = document.querySelector("#message");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", event => {
      event.preventDefault();
      this.checkForm(event)

    })
  }

  checkForm(event) {
    if (this.nameField.lastElementChild.value === "") {
      this.nameField.appendChild(this.createErrorMessage("請輸入名字"));
    } else {
      if (this.nameField.lastElementChild.tagName === "P") {
        this.nameField.lastElementChild.remove()
      }
    }

    if (this.emailField.lastElementChild.value === "") {
      this.emailField.appendChild(this.createErrorMessage("請輸入Email"));
    } else {
      if (this.emailField.lastElementChild.tagName === "P") {
        this.emailField.lastElementChild.remove()
      }
    }

    if (this.msgField.lastElementChild.value === "") {
      this.msgField.appendChild(this.createErrorMessage("請輸入Message"));
    } else {
      if (this.msgField.lastElementChild.tagName === "P") {
        this.msgField.lastElementChild.remove()
      }
    }
  }

  createErrorMessage(msg) {
    let createError = document.createElement('p');
    createError.innerText = msg
    createError.classList.add("text-red-500", "text-xs", "italic");
    return createError;
  }
}

export default Form;
