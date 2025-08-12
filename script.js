const usuarios =  [
    {usuario: "admin", senha: "admin"},
    {usuario: "suporte", senha: "1234"},
]


const form = document.getElementById('login-form');
const inputUsuario = document.getElementById('input-usuario');
const inputSenha = document.getElementById('input-senha');
const loginError = document.getElementById('login-error');

//Detectar qual o botao foi clicado (Entrar ou Cadastrar)
form.addEventListener('submit', (eventos) => {
    eventos.preventDefault();

    const usuario = inputUsuario.value.trim();
    const senha = inputSenha.value.trim();

    //Checar qual o botão foi clicado
    const botaoClicado = document.activeElement;

    if(botaoClicado.textContent === "Entrar"){
        login(usuario, senha);
    }else if(botaoClicado.textContent === "Cadastrar Usuário"){
        cadastrar(usuario, senha);
    }
})

function login(usuario, senha){
    const encontrado = usuarios.find(chave => chave.usuario === usuario && chave.senha === senha);

    if(encontrado){
        loginError.textContent = '';
        alert(`Bem vindo, ${usuario}!`);
         //limpar campos
        inputUsuario.value = '';
        inputSenha.value = '';
        // Direcionar para a pagida principal do sistema
    }else{
        loginError.textContent = 'Usuário ou senha incorreta.';
        loginError.classList.add('error-msg');
    }
}

function cadastrar(usuario, senha){
    if(usuarios.some(chave => chave.usuario === usuario)){
        loginError.textContent = 'Usuário já existe.';
        loginError.classList.add('error-msg');
        return;
    }

    usuarios.push({usuario, senha});

    loginError.textContent = 'Usuário cadastrado com sucesso! Faça login.';
    loginError.classList.remove('error-msg');
    //limpar campos
    inputUsuario.value = '';
    inputSenha.value = '';
}