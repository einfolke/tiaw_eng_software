function cadastrarUsuario() {
  let novoUsuario = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('e-mail').value,
    dataNascimento: document.getElementById('data-nascimento').value,
    cpf: document.getElementById('cpf').value,
    senha: document.getElementById('senha').value,
    confirmarSenha: document.getElementById('confirmar-senha').value
  };

  console.table(novoUsuario);

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  if (!Array.isArray(usuarios)) {
    usuarios = [];
  }

  let usuarioExistente = usuarios.find(usuario => usuario.email === novoUsuario.email);
  if (usuarioExistente) {
    console.error('E-mail já cadastrado!');
    return;
  }
  
  usuarios.push(novoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  console.log('Usuário cadastrado localmente:', novoUsuario);

  window.location.href = 'login.html';
}

function logarUsuario() {
  let email = document.getElementById('e-mail').value;
  let senha = document.getElementById('senha').value;
  let button = document.getElementById('login-button')

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  let usuarioEncontrado = usuarios.find(
    usuario => usuario.email === email && usuario.senha === senha
  );

  if (usuarioEncontrado) {
    console.log('Usuário logado com sucesso!');
  } else {
    console.error('E-mail ou senha incorretos!');
  }
  window.location.href = "../codigo/index_login.html";
}