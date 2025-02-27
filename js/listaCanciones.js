const video = document.getElementById("cancion");
const lineaLetra = document.getElementById("lineaLetra");
let letrasActuales = [];
let offsetActual = 0; 
let indiceLetra = 0;

// Cargar letras y offset para la canción seleccionada
function cargarLetras(tituloCancion) {
    if (letrasCanciones[tituloCancion]) {
        letrasActuales = letrasCanciones[tituloCancion].lyrics;
        offsetActual = letrasCanciones[tituloCancion].offset;
    } else {
        letrasActuales = [];
        offsetActual = 0;
    }
    indiceLetra = 0;
    lineaLetra.innerText = "Reproduciendo: " + tituloCancion;
}

// Sincronizar letras con el tiempo actual del video
video.addEventListener("timeupdate", () => {
    if (letrasActuales.length === 0) return;

    if (indiceLetra < letrasActuales.length) {
        const letraActual = letrasActuales[indiceLetra];
        // Aplicar el offset
        if (video.currentTime >= letraActual.time + offsetActual) {
            lineaLetra.innerText = letraActual.text; // Mostrar la letra actual
            indiceLetra++;
        }
    }
});

// Detectar selección de una canción en la lista
const listaCanciones = document.querySelectorAll(".cancion");
listaCanciones.forEach((cancion) => {
    cancion.addEventListener("click", () => {
        const titulo = cancion.innerText; // Obtener título de la canción
        const fuente = cancion.getAttribute("data-src"); // Obtener la ruta del video

        video.src = fuente; // Cambiar el video en el reproductor
        video.play(); // Reproducir el video
        cargarLetras(titulo); // Cargar letras y offset correspondientes
    });
});