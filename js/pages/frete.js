import { calcularFrete } from "../services/frete.js";

export function inicializarFrete() {
  const btnFrete = document.getElementById("btnFrete");
  const inputCep = document.getElementById("cep");

  if (!btnFrete || !inputCep) return;

  btnFrete.addEventListener("click", calcularFrete);

  inputCep.addEventListener("input", (e) => {
    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 5) {
      valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
    }

    e.target.value = valor;
  });
}