const bntarteinfo = document.querySelector('.bnt-arte-info')
bntarteinfo.addEventListener('click', clicar)
function clicar(){
    const allpage = document.querySelector('.body-art')
    allpage.classList.toggle("mostre-down-bar")
}