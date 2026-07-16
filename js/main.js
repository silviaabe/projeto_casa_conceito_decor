import { calcularFrete } from "./services/frete.js";

document
  .getElementById("btnFrete")
  .addEventListener("click", calcularFrete);

  const inputCep = document.getElementById("cep");

inputCep.addEventListener("input", (e) => {
  let valor = e.target.value.replace(/\D/g, "");

  if (valor.length > 5) {
    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
  }

  e.target.value = valor;
});