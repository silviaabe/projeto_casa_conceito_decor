import { adicionarProduto, mostrarToast } from "../services/carrinho.js";

class Card extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute("src") || "";
    const categoria = this.getAttribute('categoria') || '';
    const titulo = this.getAttribute('titulo') || '';
    const preco = this.getAttribute('preco') || '';
    const descricao = this.getAttribute('descricao') || '';

    this.innerHTML = `
    <div class="card">
      <img src="${src}" alt="${titulo}">
      <span class="categoria">${categoria}</span>
      <h3 class="titulo">${titulo}</h3>
      <p class="preco">${preco}</p>
      <p class="descricao">${descricao}</p>
      <button class="btn">Adicionar ao carrinho</button>
    </div>
    `

    const produto = {
      src,
      categoria,
      titulo,
      preco,
      descricao
    };

    this.querySelector(".btn").addEventListener("click", () => {
      adicionarProduto(produto);
      mostrarToast("Produto adicionado ao carrinho!");
    });
  }
}

customElements.define('card-produto', Card)