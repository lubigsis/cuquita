document.getElementById('playerJS').addEventListener("mouseover", sumarPuntos);

let puntos = 0;

function sumarPuntos(){
    puntos++;
    document.getElementById("puntajeJS").innerHTML = "Puntos: <b>" + puntos + "</b>";

    randomNum1 = Math.round(Math.random()*400);
    randomNum2 = Math.round(Math.random()*400);

    document.getElementById("playerJS").style.marginTop = randomNum1 + "px";
    document.getElementById("playerJS").style.marginLeft = randomNum2 + "px";
};