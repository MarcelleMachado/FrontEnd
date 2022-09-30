 

// LOGIN ????

document.getElementById("enterBtn").onclick = async() => {
    var usuario, senha;
    var error = true;
    var input = document.getElementById("usuario");
    usuario = input.value;
    input = document.getElementById("senha");
    senha = input.value;
    var preverificacao =  await fetch("../assets/js/api.login.json");
    var verificacao = await preverificacao.json();
    verificacao.forEach(element => {
        console.log(element.aluno);        
        if( element.aluno === usuario && element.senha === senha){
                error = false;
                localStorage.setItem("Jogador", element.aluno);
                localStorage.setItem("json",verificacao);
                window.location.href = '/pages';
        }})
        if(error){
        alert('Login ou senha invalidos');
        }
}
