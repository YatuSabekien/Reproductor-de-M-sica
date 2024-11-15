// APARTADO DEL REPRODUCTO DE VIDEO MUSICAL

// Titulos
const tituloCancion = document.querySelector('.reproducor-musica h1');
const nombreArtista = document.querySelector('.reproducor-musica p');

// Barra de progreso
const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

// Boton para reproducir y pausar
const inconoControl = document.getElementById('iconoControl');
const botonReproducirPausar = document.querySelector('.controles button.boton-reproducir-pausar');

// Botones de atras y siguiente
const botonAtras = document.querySelector('.controles button.atras');
const botonSiguiente = document.querySelector('.controles button.siguiente');

// Canciones
const canciones = [
    {
        titulo: 'Ride',
        nombre: 'Twenty One Pilots',
        fuente: 'videos/Ride - Twenty One Pilots.mp4'
    },
    {
        titulo: 'Bones',
        nombre: 'Imagine Dragons',
        fuente: 'videos/Bones - Imagine Dragons.mp4'
    },
    {
        titulo: '(You Drive Me) Crazy',
        nombre: 'Britney Spears',
        fuente: 'videos/(You Drive Me) Crazy - Britney Spears.mp4'
    },
];

// Posición de las canciones
let indiceCancionActual = 0;

function actualizarCancion(){
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener('loadeddata',function(){});
};

// Reproducir y pausar las canciones
botonReproducirPausar.addEventListener('click', reproducirPausar);

function reproducirPausar(){
    if(cancion.paused){
        reproducirCancion();
    } else {
        pausarCancion();
    }
};

// Cambia el icono cuando se reproduce la canción
function reproducirCancion(){
    cancion.play();
    inconoControl.classList.add('bi-pause-fill');
    inconoControl.classList.remove('bi-play-fill');
}

// Cambia el icono cuando se pausa la canción
function pausarCancion(){
    cancion.pause();
    inconoControl.classList.remove('bi-pause-fill');
    inconoControl.classList.add('bi-play-fill');
}

// Mueve la barra de progreso al reproducir la canción
cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused){
        progreso.value = cancion.currentTime;
    }
});

// Sincroniza el movimiento de la barra de progreso con la duración de la canción
cancion.addEventListener('loadedmetadata', function () {
    progreso.max = cancion.duration;
});

// Reproduce la canción en el lugar donde se mueva la barra de progreso
progreso.addEventListener('input', function(){
    cancion.currentTime = progreso.value;
});

// Boton siguiente
botonSiguiente.addEventListener('click', function(){
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    actualizarCancion();
    reproducirCancion();
})

// Boton atras
botonAtras.addEventListener('click', function(){
    indiceCancionActual = (indiceCancionActual - 1 + canciones.length) % canciones.length;
    actualizarCancion();
    reproducirCancion();
})

// Se esta ejecutando siempre
actualizarCancion();