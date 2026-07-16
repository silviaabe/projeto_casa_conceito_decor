export function inicializarContato() {
  const formContato = document.getElementById("formContato");

  if (!formContato) return;

  formContato.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("mensagemContato").innerHTML = `
      <div class="mensagem-contato">
        <h3>Mensagem enviada!</h3>
        <p>Obrigado pelo contato.</p>
        <p>Retornaremos em breve.</p>
      </div>
    `;

    formContato.reset();
  });
}