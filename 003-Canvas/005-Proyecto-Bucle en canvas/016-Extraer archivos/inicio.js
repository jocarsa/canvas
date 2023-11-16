var temporizador = setTimeout("bucle()",1000);
const contexto = document.getElementById("lienzo").getContext("2d");
const anchura = window.innerWidth
const altura = window.innerHeight
document.getElementById("lienzo").width = anchura;
document.getElementById("lienzo").height = altura;
var sonido = new Audio("../piano/C5.mp3");
window.onclick = function(){
    sonido.currentTime = 0;
    sonido.play()
}
var entidades = [];
var numeroentidades = 10;
for(let i = 0;i<numeroentidades;i++){
    entidades[i] = new Entidad();
    entidades[i].x = 256;
    entidades[i].y = 256;
    entidades[i].direccion = Math.random()*Math.PI*2
}