function moverdiv() {
    let formbox = document.querySelector('.form-box')
    formbox.classList.add('active')
    formbox.style.borderRadius = '120px 15px 15px 120px'

    let cadastrar = document.getElementById('cadastrar')
    cadastrar.style.display = 'none'
    
    let Entrar = document.getElementById('Entrar')
    Entrar.style.display = 'block'
    
}

function moverdiv2() {
    let formbox = document.querySelector('.form-box')
    formbox.classList.remove('active')
    formbox.style.borderRadius = '15px 120px 120px 15px'


    let cadastrar = document.getElementById('cadastrar')
    cadastrar.style.display = 'block'

    let Entrar = document.getElementById('Entrar')
    Entrar.style.display = 'none'
}

function mudarParaentrar() {
    let Entrar = document.getElementById('Entrar')
    Entrar.style.display = 'block'

    let cadastrar = document.getElementById('cadastrar')
    cadastrar.style.display = 'none'
}

