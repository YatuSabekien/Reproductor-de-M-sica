// Función para reproducir canción y actualizar los detalles
function reproducirCancionYActualizarDetalles(indice) {
    const cancion = detallesCanciones[indice];
    const video = document.getElementById("cancion");
    const videoSource = video.querySelector("source");

    // Actualizar la fuente del video
    videoSource.src = cancion.fuente;
    video.load();

    // Asegura que el video se reproduzca solo después de que cargue
    video.onloadeddata = () => {
        video.play().catch((error) => {
            console.error("Error al intentar reproducir el video:", error);
        });
    };

    // Actualizar la imagen del álbum
    document.getElementById("portada-album").src = cancion.imagen;

    // Actualizar los detalles de la canción
    document.getElementById("titulo-cancion").textContent = `Título de la canción: ${cancion.titulo}`;
    document.getElementById("artista").textContent = `Artista(s): ${cancion.artista}`;
    document.getElementById("album").textContent = `Álbum: ${cancion.album}`;
    document.getElementById("duracion").textContent = `Duración: ${cancion.duracion}`;
    document.getElementById("genero").textContent = `Género: ${cancion.genero}`;
    document.getElementById("año").textContent = `Año de lanzamiento: ${cancion.año}`;
    document.getElementById("popularidad").textContent = `Popularidad: ${cancion.popularidad}`;

    // Actualizar las recomendaciones
    const listaRecomendaciones = document.getElementById("recomendaciones");
    listaRecomendaciones.innerHTML = ""; // Limpia las recomendaciones actuales

    cancion.recomendaciones.forEach((exito) => {
        const li = document.createElement("li");
        li.textContent = exito; // Añade el título del éxito
        listaRecomendaciones.appendChild(li); // Lo agrega a la lista
    });
}

// Mostrar las canciones recomendadas cuando se hace click sobre el filtro de canciones
document.querySelectorAll(".cancion").forEach((elemento, indice) => {
    elemento.addEventListener("click", () => {
        reproducirCancionYActualizarDetalles(indice);
    });
});

// Parte nueva (corregir) me voy pal lol

// Reproducir la cancion recomendada que sea clickeada
const todasLasCanciones = document.querySelectorAll(".cancion");

todasLasCanciones.forEach((cancion) => {
    cancion.addEventListener("click", () => {
        const titulo = cancion.innerText; // Obtener el título de la canción
        const fuente = cancion.getAttribute("data-src"); // Obtener la ruta del video

        video.src = fuente; // Cambiar el video en el reproductor
        video.play(); // Reproducir el video
        cargarLetras(titulo); // Cargar letras y offset correspondientes

        // Opcional: Mostrar detalles de la canción
        const tituloElemento = document.querySelector(".reproducor-musica h1");
        const artistaElemento = document.querySelector(".reproducor-musica p");
        const [nombreCancion, artista] = titulo.split(" - "); // Separar título y artista
        tituloElemento.innerText = nombreCancion || "Título desconocido";
        artistaElemento.innerText = artista || "Artista desconocido";
    });
});