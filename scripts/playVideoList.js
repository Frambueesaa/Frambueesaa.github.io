//Este script sirve para reproducir videos en un Array automaticamente.

//Videos para reproducir.
const videos = [
    "videos/Presentacion_1.mp4"
];

//Reproductor de video.
const videoPlayer = document.getElementById("VideoList");
let currentIndex = 0;

//Funcion que reproduce el video con el indice actual.
function playVideo(index)
{
    videoPlayer.src = videos[index];
    videoPlayer.play();
}

//Hace que el indice sea un bucle para reproducir videos siempre.
function fixIndex(index)
{
    if (index >= currentIndex)
    {
        index = 0;
    }
}

function onVideoEnded()
{
    currentIndex++;
    fixIndex();
    playVideo(currentIndex);
    console.log("Reproduciendo video");
}

//Se suscribe al evento de terminar el video para actualizar el Index.
videoPlayer.addEventListener("ended", onVideoEnded);