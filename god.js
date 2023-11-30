
const muestraContador = document.querySelector('#cont')

let contador = 0
muestraContador.innerHTML = contador;
muestraContador.classList.add('blanco')

function sumarContador() {
    contador++
    muestraContador.innerHTML = contador;

    muestraContador.classList.remove('blanco')
    muestraContador.classList.add('rojo')
}

function reset(){
    contador = 0
    muestraContador.innerHTML = contador;

    muestraContador.classList.remove('rojo')
    muestraContador.classList.add('blanco')
}

/*const listado = document.querySelector('#lista')

const item1 = document.createElement('li')
item1.innerHTML = 'Producto 1'

const item2 = document.createElement('li')
item2.innerHTML = 'Producto 2'

listado.appendChild(item1)
listado.appendChild(item2)

const titulo = document.getElementById('titulo')

const titulo = document.querySelector('#titulo')

titulo.classList.add('rojo', 'texto-blanco')

titulo.innerHTML = 'Hola!'

titulo.classList.remove('texto-blanco') */