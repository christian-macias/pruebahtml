let miImagen = document.querySelector('img');

miImagen.onclick = function() {
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'images/html.png') {
        miImagen.setAttribute('src', 'images/javascript.png');
    } else {
        miImagen.setAttribute('src', 'images/html.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre:');
    if(!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = miNombre + ', bienvenido al desarrollo Web!!!';
    }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = nombreAlmacenado + ', bienvenido al desarrollo Web!!!';
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}