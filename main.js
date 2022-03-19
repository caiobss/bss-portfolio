const bntarteinfo = document.querySelector('.bnt-arte-info')
bntarteinfo.addEventListener('click', clicar)
function clicar(){
    const allpage = document.querySelector('.allpage')
    allpage.classList.toggle("mostre-down-bar")
}