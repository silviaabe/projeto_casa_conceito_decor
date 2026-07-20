class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `<header class="cabecalho">
        <div class="logo">
          <img src="../../assets/logo.png" alt="Logo Casa Conceito Decor">
        </div>
        <nav class="navegacao">
          <a href="#destaques">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
          <a href="#">CARRINHO</a>
        </nav>
      </header>`
    ;
  }
}

customElements.define('site-header', SiteHeader)