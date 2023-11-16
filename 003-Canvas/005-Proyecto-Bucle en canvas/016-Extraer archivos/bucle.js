function bucle(){
    contexto.clearRect(0,0,anchura,altura);
    for(let i = 0;i<numeroentidades;i++){
        entidades[i].mueve();
    }
    clearTimeout(temporizador);
    temporizador = setTimeout("bucle()",3);
}