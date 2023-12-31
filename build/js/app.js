document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
})

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1;i <= 12;i++)
    {
        const imagen = document.createElement('picture');
        
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen_galeria">
            `;

        imagen.onclick = function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);

        
    }
}
function mostrarImagen(id){
    //creando la imagen Grande de Galeria
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen_galeria">
    `;
    //creando el overlay
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick= function(){
        const body = document.querySelector('body');
        //noscroll
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    //boton para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent= 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function(){
        //mostrar en pantalla
        const body = document.querySelector('body');
        //noscroll
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);

    //mostrar en pantalla
    const body = document.querySelector('body');
    body.appendChild(overlay);
    //noscroll
    body.classList.add('fijar-body');
}