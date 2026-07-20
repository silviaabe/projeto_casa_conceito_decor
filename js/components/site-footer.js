class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <h3>Casa Conceito Decor</h3>
      <p>Transformando ambientes com elegância e personalidade.</p>
      <div class="footer__redes">
        <a href="#" aria-label="Instagram" title="Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#" aria-label="Facebook" title="Facebook">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="TikTok" title="TikTok">
          <i class="fa-brands fa-tiktok"></i>
        </a>
        <a href="#" aria-label="Twitter" title="Twitter">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#" aria-label="Pinterest" title="Pinterest">
          <i class="fa-brands fa-pinterest-p"></i>
        </a>
        <a href="#" aria-label="YouTube" title="YouTube">
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <p class="footer__copy">
        © 2026 Casa Conceito Decor. Todos os direitos reservados.
      </p>
    </footer>
    `
  }
}

customElements.define('site-footer', SiteFooter)