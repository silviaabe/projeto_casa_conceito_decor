class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `<header class="cabecalho">
        <div class="logo">
          <!-- <img src="./logo.png" alt="Logo Casa Conceito Decor"> -->
          Casa Conceito Decor
        </div>
        <nav class="navegacao">
          <a href="#">INICIAR SESSÃO</a>
          <a href="#">AJUDA</a>
          <a href="#">CARRINHO</a>
        </nav>
      </header>`
    ;
  }
}

customElements.define('site-header', SiteHeader)