export async function calcularFrete() {
  try {
    const cep = document.getElementById("cep").value;
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      throw new Error("O CEP deve ter 8 dígitos.");
    }

    const resposta = await fetch(
      `https://viacep.com.br/ws/${cepLimpo}/json/`
    );

    const dados = await resposta.json();

    if (dados.erro) {
      throw new Error("CEP não encontrado.");
    }

    let frete = "";

    if (dados.uf === "SP") {
      frete = "R$ 19,90";
    } else if (dados.uf === "PR") {
      frete = "R$ 24,90";
    } else {
      frete = "R$ 39,90";
    }

    document.getElementById("resultado").innerHTML = `
      <div class="resultado-frete">
        <h3>${dados.localidade} - ${dados.uf}</h3>
        <p>📦 Entrega estimada: <strong>3 a 5 dias úteis</strong></p>
        <p class="valor-frete">Frete: ${frete}</p>
      </div>
    `;
  } catch (erro) {
    document.getElementById("resultado").innerHTML = `
      <div class="resultado-frete erro">
        ${erro.message}
      </div>
    `;
  }
}
