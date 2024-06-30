function userLogado() {
    var usuarioLogado = {
        "nome": "João",
        "telefone": "99999999999",
        "email": "chatgpt@openai.com",
        "Data": "130423",
        "descricao": "Partico futebol e vôlei asifuagfuavsuofgbosodahaisdpjashfipagihpsghdiphaosbifbguoasbdouhasoudoufsaguodgouagsofaoycivasbojdhsuoagfuogsaudbhasuçfbiavsfvasfçvasvfçasdufbçsdgifçb ",
    };

    // Serializa o objeto usuarioLogado para uma string JSON
    var usuarioString = JSON.stringify(usuarioLogado);

    // Armazena a string JSON no localStorage com a chave "usuario"
    localStorage.setItem("usuario", usuarioString);

    var user = localStorage.getItem("usuario")
    var JSONObject = JSON.parse(user)

    let nomeUsuario = JSONObject.nome;
    let email = JSONObject.email;
    let telefone = JSONObject.telefone;
    let data = JSONObject.Data;
    let descricao = JSONObject.descricao;


    // Convertendo a data para o formato "yyyy-MM-dd"
    var dataFormatada = "20" + data.substring(4, 6) + "-" + data.substring(2, 4) + "-" + data.substring(0, 2);

    // Definindo os valores dos campos de entrada
    var inputNome = document.getElementById("nomeUser");
    inputNome.value = nomeUsuario;

    var inputData = document.getElementById("dataUser");
    inputData.value = dataFormatada;

    var inputEmail = document.getElementById("emailUser");
    inputEmail.value = email;

    var inputTelefone = document.getElementById("telefoneUser");
    inputTelefone.value = telefone;

    var outputDescricao = document.getElementById("descricaoOutput");
    outputDescricao.value = descricao
}



function alteraPerfil() {
    var user = localStorage.getItem("usuario")
    console.log(user);
    var JSONObject = JSON.parse(user)
    console.log(JSONObject);

    // Definindo os valores dos campos de entrada
    var inputNome = document.getElementById("nomeUser");
    let nomeUsuario = inputNome.value;

    var inputData = document.getElementById("dataUser");
    let dataFormatada = inputData.value;

    var inputEmail = document.getElementById("emailUser");
    let email = inputEmail.value;

    var inputTelefone = document.getElementById("telefoneUser");
    let telefone = inputTelefone.value;

    var outputDescricao = document.getElementById("descricaoOutput");
    descricao = outputDescricao.value;

    JSONObject.nome = nomeUsuario;
    JSONObject.Data = dataFormatada;
    JSONObject.email = email;
    JSONObject.telefone = telefone;
    JSONObject.descricao = descricao;

    console.log(JSONObject);

    // Serializa o objeto usuarioLogado para uma string JSON
    var usuarioString = JSON.stringify(JSONObject);

    // Armazena a string JSON no localStorage com a chave "usuario"
    localStorage.setItem("usuario", usuarioString);
}


function ultimasPartidas() {
    let JSONpartidas = [
        {
            "nome": "FUT DO LIPE",
            "estrelas": 4,
            "imagem": "img/pessoa2.jpg",
        },
        {
            "nome": "FUT DO CELSO",
            "estrelas": 3,
            "imagem": "img/pessoa1.jpg",
        },
        {
            "nome": "Partida 3",
            "estrelas": 5,
            "imagem": "https://example.com/imagem3.jpg"
        },
        {
            "nome": "Partida 4",
            "estrelas": 2,
            "imagem": "https://example.com/imagem4.jpg"
        },
        {
            "nome": "Partida 5",
            "estrelas": 4,
            "imagem": "https://example.com/imagem5.jpg"
        }
    ];

    let partidasRecentes = [
        {
            "nome": "FUT DO LIPE",
            "estrelas": 4,
            "imagem": "img/pessoa2.jpg",
        },
        {
            "nome": "FUT DO CELSO",
            "estrelas": 3,
            "imagem": "img/pessoa1.jpg",
        }
    ];

    // Serializa o objeto usuarioLogado para uma string JSON
    var partidaRecenteString = JSON.stringify(partidasRecentes);

    // Armazena a string JSON no localStorage com a chave "usuario"
    localStorage.setItem("partidasRecentes", partidaRecenteString);


    // Serializa o objeto usuarioLogado para uma string JSON
    var partidaString = JSON.stringify(JSONpartidas);

    // Armazena a string JSON no localStorage com a chave "usuario"
    localStorage.setItem("partidas", partidaString);

    var recentes = localStorage.getItem("partidasRecentes")
    var JSONObject = JSON.parse(recentes)
    console.log(JSONObject)

    let container = document.getElementById("cards");

    JSONObject.forEach(partida => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("partidas");
        card.classList.add("col-md-6");
        card.classList.add("col-sm-12");

        let linha = document.createElement("div");
        linha.classList.add("row");

        let estrelas = document.createElement("p");
        estrelas.classList.add("estrela"); // Adiciona a classe "estrela"
        for (let i = 0; i < partida.estrelas; i++) {
            estrelas.innerHTML += "&#9733; "; // Adiciona uma estrela cheia para cada estrela
        }
        for (let i = partida.estrelas; i < 5; i++) {
            estrelas.innerHTML += "&#9734; "; // Adiciona uma estrela vazia para as estrelas não preenchidas
        }

        let nome = document.createElement("p");
        nome.textContent = partida.nome;

        let coluna1 = document.createElement("div");
        coluna1.classList.add("col-6");
        let coluna2 = document.createElement("div");
        coluna2.classList.add("col-6");

        // Criar um elemento de imagem
        let imagem = document.createElement("img");
        imagem.src = partida.imagem; // Substitua "URL_DA_IMAGEM" pelo URL da imagem desejada
        imagem.alt = "Imagem da partida"; // Texto alternativo da imagem
        // Adicionando estilos à imagem
        imagem.style.width = "100px"; // Defina a largura desejada
        imagem.style.height = "100px"; // Defina a altura desejada
        imagem.style.borderRadius = "50%";
        imagem.style.marginLeft = "5rem";
        console.log(imagem)

        coluna1.appendChild(estrelas);
        coluna1.appendChild(nome);
        coluna2.appendChild(imagem);
        linha.appendChild(coluna1);
        linha.appendChild(coluna2);
        card.appendChild(linha);

        // Adicionar o card ao contêiner
        container.appendChild(card);
    });


}


// Chamada da função para adicionar o usuário logado ao localStorage e preencher os campos de entrada
userLogado()
ultimasPartidas();