// APARTADO DE LA LISTA DE LAS CANCIONES

// Función para buscar canciones por caja de texto
function filtrarCanciones() {
    const entradaBusqueda = document.getElementById('busqueda').value.toLowerCase();
    const elementosCancion = document.querySelectorAll('.cancion');

    elementosCancion.forEach(cancion => {
        const textoCancion = cancion.textContent.toLowerCase();
        if (textoCancion.includes(entradaBusqueda)) {
            cancion.style.display = 'block';
        } else {
            cancion.style.display = 'none';
        }
    });
}

// Reproducir la cancion al hacer click
const escuchar = document.getElementById('cancion');
const todasCanciones = document.querySelectorAll('.cancion');

todasCanciones.forEach((musica, index) => {
    musica.addEventListener('click', () => {
        // Actualiza el índice de la canción actual
        indiceCancionActual = index;
        // Actualiza la canción con el título, artista y fuente correctos
        actualizarCancion();
        // Cambia la fuente de audio y reproduce la canción
        escuchar.src = musica.getAttribute('data-src');
        escuchar.play();
        // Cambia el incono del boton reproducir-pausar
        inconoControl.classList.add('bi-pause-fill');
        inconoControl.classList.remove('bi-play-fill');
    });
});