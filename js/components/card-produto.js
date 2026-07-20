class Card extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute("src") || "";
    const categoria = this.getAttribute('categoria') || '';
    const titulo = this.getAttribute('titulo') || '';
    const preco = this.getAttribute('preco') || '';

    this.innerHTML = `
    <div class="card">
      <img src="${src}" alt="${titulo}">
      <span class="categoria">${categoria}</span>
      <h3 class="titulo">${titulo}</h3>
      <p class="preco">${preco}</p>
      <button class="btn">Ver detalhes</button>
    </div>
    `
  }
}

customElements.define('card-produto', Card)