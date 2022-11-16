const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector(".login--form");

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    return button.removeAttribute("disabled"); // * retorna caso passe no teste
  }
  button.setAttribute("disabled", ""); // só irá ser chamado se não retornar no teste
};
const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem("player", input.value);
  window.location = './pages/game.html'
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
