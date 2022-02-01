const hamburguer = document.querySelector(".hamburguer")
const menua = document.querySelector('.menu')
hamburguer.addEventListener('click', clicar)
menua.addEventListener('click', clicar)
function clicar(){
    const container = document.querySelector('.container')
    container.classList.toggle('mostre-side-bar')
}