// Função para criar um card de partida
function criarCardPartida(partida, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    const nomePartida = document.createElement('h2');
    nomePartida.textContent = partida.nome;
    card.appendChild(nomePartida);

    const escolhaEsporte = document.createElement('p');
    escolhaEsporte.textContent = 'Esporte: ' + partida.escolhaEsporte;
    card.appendChild(escolhaEsporte);

    const endereco = document.createElement('p');
    endereco.textContent = 'Endereço: ' + partida.endereco;
    card.appendChild(endereco);

    const faixaEtaria = document.createElement('p');
    faixaEtaria.textContent = 'Faixa Etária: ' + partida.faixaIdade;
    card.appendChild(faixaEtaria);

    const descricao = document.createElement('p');
    descricao.textContent = 'Descrição: ' + partida.descricao;
    card.appendChild(descricao);

    const botaoMostrar = document.createElement('button');
    botaoMostrar.textContent = 'Ver Detalhes';
    botaoMostrar.id = 'mostrar-partida';
    botaoMostrar.setAttribute('data-index', index); // Define o índice da partida como um atributo do botão
    botaoMostrar.addEventListener('click', function() {
        // Salva o índice da partida no localStorage
        localStorage.setItem('partidaIndex', this.getAttribute('data-index'));
        // Redireciona para a página de detalhes
        window.location.href = 'detalhes-partida.html';
    });
    card.appendChild(botaoMostrar);

    return card;
}

// Função para atualizar a listagem de partidas
function atualizarListagem() {
    const partidas = JSON.parse(localStorage.getItem('partidas')) || [];
    const main = document.querySelector('main');
    main.innerHTML = ''; // Limpa o conteúdo atual antes de adicionar novos cards

    partidas.forEach((partida, index) => {
        const cardPartida = criarCardPartida(partida, index);
        main.appendChild(cardPartida);
    });
}

function cadastrarPessoas(){
    if(!localStorage.getItem('participantes')){
        let text = '{ "participantes" : []}'
        console.log(text);
        window.localStorage.setItem("participantes", text);
    }
}

// Chama a função atualizarListagem quando a página é carregada
document.addEventListener('DOMContentLoaded', atualizarListagem);
// Chama a função carregarDetalhesPartida quando a página de detalhes é carregada
document.addEventListener('DOMContentLoaded', cadastrarPessoas);


