const form = document.querySelector("form");
const nomeInput = document.querySelector("#nome-partida-user input");
const descricaoInput = document.querySelector("#cadastro-partidas textarea");
const enderecoInput = document.querySelector("#endereco input");
const linkContatoInput = document.querySelector("#linkContato input");

/**
 * Salva os dados no Local Storage do navegador e redireciona para a página de listagem de partidas.
 */
function salvarEEnviar() {
    let partida = {
        nome: nomeInput.value.trim(),
        descricao: descricaoInput.value.trim(),
        endereco: enderecoInput.value.trim(),
        linkContato: linkContatoInput.value.trim(),
        faixaIdade: document.querySelector("#faixa-idade").value,
        escolhaEsporte: document.querySelector("#escolha-esporte").value,
        opcaoPagamento: document.querySelector("#opcao-pagamento").value,
        checklist: [
            document.getElementById('checkbox-1').checked,
            document.getElementById('checkbox-2').checked,
            document.getElementById('checkbox-3').checked,
            document.getElementById('checkbox-4').checked,
            document.getElementById('checkbox-5').checked
        ]
    };

    // Obtendo os dados de partidas já cadastradas
    let partidas = JSON.parse(localStorage.getItem("partidas")) || [];
    partidas.push(partida);
    
    // Salvando os dados no Local Storage
    localStorage.setItem("partidas", JSON.stringify(partidas));

    // Redirecionando para a página de listagem de partidas
    window.location.href = "../codigo/listagem-partidas.html";
}

// Adicionando um evento de clique ao botão salvar
document.getElementById("botao-salvar").addEventListener("click", salvarEEnviar);