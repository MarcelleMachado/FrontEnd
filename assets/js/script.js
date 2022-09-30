var btn = document.querySelectorAll(".botao");
console.log(btn);

btn.forEach(element => {
    element.addEventListener("click",topoPagina)
});

// btn.addEventListener("click",topoPagina);

function topoPagina() {
    window.scrollTo(0,0);
}
