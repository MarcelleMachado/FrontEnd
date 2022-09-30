var btn = document.querySelectorAll(".botao");
console.log(btn);

btn.forEach(element => {
    element.addEventListener("click",topoPagina)
});

// btn.addEventListener("click",topoPagina);

function topoPagina() {
    window.scrollTo(0,0);
}


// LOGIN ????
document.getElementById("signBtn").onclick = async() => {
    window.location.href = './cadastro.html';
}

document.getElementById("enterBtn").onclick = async() => {
    var usuario, senha;
    var error = true;
    var input = document.getElementById("usuario");
    usuario = input.value;
    input = document.getElementById("senha");
    senha = input.value;
    var preverificacao =  await fetch('./api.login.json');
    var verificacao = await preverificacao.json();
    verificacao.forEach(element => {
        console.log(element.aluno);        
        if( element.aluno === usuario && element.senha === senha){
                error = false;
                localStorage.setItem("Jogador", element.aluno);
                localStorage.setItem("json",verificacao);
                 window.location.href = './BlackJack-API/pagina-api.html';
        }})
        if(error){
        alert('Login ou senha invalidos');
        }
}

// var resposta = await fetch ('https://api.github.com/users/' + usuario);
// var answer = await resposta.json();
// console.log(answer);

document.getElementById("dsc").onclick = async() => {
    window.location.href = 'https://discord.com/login'
}
document.getElementById("fb").onclick = async() => {
    window.location.href = 'https://www.facebook.com/'
}
document.getElementById("gh").onclick = async() => {
    window.location.href = 'https://www.github.com/login'
}
document.getElementById("gg").onclick = async() => {
    window.location.href = 'https://accounts.google.com/'
}
document.getElementById("tt").onclick = async() => {
    window.location.href = 'https://www.twitter.com/i/flow/login'
}