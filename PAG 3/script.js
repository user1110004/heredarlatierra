// Ralentizar el video de las nubes al cargar la interfaz
window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('videoCielo');
    if (video) {
        video.playbackRate = 0.4; 
    }
});

// Abrir el nodo de video (Vimeo)
function abrirVideo(urlEmbed) {
    const modal = document.getElementById('modal-video');
    const player = document.getElementById('vimeo-player');
    player.src = urlEmbed + "?autoplay=1";
    modal.style.display = "flex";
}

// Cerrar el nodo de video
function cerrarVideo() {
    const modal = document.getElementById('modal-video');
    const player = document.getElementById('vimeo-player');
    player.src = "";
    modal.style.display = "none";
}

// SISTEMA DE SIEMBRA PERMANENTE CON ANIMACIÓN FLUIDA DE NACIMIENTO
document.getElementById('patio').addEventListener('click', function(e) {
    if (e.target.classList.contains('zona')) return;

    const flor = document.createElement('div');
    flor.classList.add('flor-hibiscus');

    const anchoBase = 110;
    const altoBase = 110;

    // 1. Cálculo de perspectiva según la altura
    const clicY = e.clientY / window.innerHeight;
    let escala = (clicY - 0.55) / (1 - 0.55); 
    if (escala < 0.20) escala = 0.20; 
    if (escala > 1.0) escala = 1.0;   

    // 2. Cálculo de rotación aleatoria
    const rotacionAleatoria = Math.floor(Math.random() * 90) - 45;

    const anchoFinal = anchoBase * escala;
    const altoFinal = altoBase * escala;
    
    flor.style.width = anchoFinal + 'px';
    flor.style.height = altoFinal + 'px';

    // Posicionamiento en el lienzo
    flor.style.left = (e.clientX - (anchoFinal / 2)) + 'px';
    flor.style.top = (e.clientY - altoFinal) + 'px';

    // ESTADO INICIAL (Oculta y encogida en el suelo)
    flor.style.transform = `scale(0) rotate(${rotacionAleatoria}deg)`;
    flor.style.opacity = "0";

    // Agregamos la flor al DOM
    document.querySelector('.contenedor-casa').appendChild(flor);

    // EFECTO DE APARICIÓN SUAVE (Se ejecuta un instante después de insertarse)
    setTimeout(() => {
        // Al asignarle su escala real, la transición CSS hace que crezca de forma elástica
        flor.style.transform = `scale(${escala}) rotate(${rotacionAleatoria}deg)`;
        flor.style.opacity = "1";
    }, 15);
});