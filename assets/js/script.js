var btn = document.querySelectorAll(".botao");

btn.forEach(element => {
    element.addEventListener("click",topoPagina)
});

function topoPagina() {
    window.scrollTo(0,0);
}

// btn.addEventListener("click",topoPagina);


// var resposta = await fetch ('https://api.github.com/users/' + usuario);
// var answer = await resposta.json();
// console.log(answer);

