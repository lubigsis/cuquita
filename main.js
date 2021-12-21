document.getElementById('playerJS').addEventListener("mouseover", sumarPuntos);

let puntos = 0;

function sumarPuntos(){
    puntos++;
    document.getElementById("puntajeJS").innerHTML = puntos;
}