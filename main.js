document.getElementById('playerJS').addEventListener("mouseover", sumarPuntos);
botonEmpezar = document.getElementById('btn-start-JS');
let puntos = 0;
let tiempo = 15;
let delTotal = 50;



//---------------------------------------------------------------------------FUNCIONES-------------------
function sumarPuntos(){
    puntos++;
    document.getElementById("puntajeJS").innerHTML = "Puntos: <b>" + puntos + "/" + delTotal + "</b>";

    randomNum1 = Math.round(Math.random()*400);
    randomNum2 = Math.round(Math.random()*400);

    document.getElementById("playerJS").style.marginTop = randomNum1 + "px";
    document.getElementById("playerJS").style.marginLeft = randomNum2 + "px";

    if (puntos == 50){
        alert("ganaste");
    }
};


function restarTiempo(){
    tiempo--;
    document.getElementById("cont-tiempoJS").innerHTML = "Tiempo: " + tiempo;
    if (tiempo == 0){
       alert("perdiste");
        tiempo = 0;
        puntos = 0;
    }
}

//setInterval(restarTiempo, 1000);

botonEmpezar.addEventListener('click', empezarJuego);

function empezarJuego(){
    sumarPuntos();
  //  restarTiempo();
    setInterval(restarTiempo, 1000);
}