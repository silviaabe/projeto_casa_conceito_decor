let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

export function adicionarProduto(produto) {
  carrinho.push(produto);
  localStorage.setItem(
    "carrinho",
    JSON.stringify(carrinho)
  );
}

export function mostrarToast(mensagem) {
  const toast = document.getElementById("toast");

  toast.textContent = mensagem;
  toast.classList.add("mostrar");

  setTimeout(() => {
    toast.classList.remove("mostrar");
  }, 2500);
}

export function obterCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}