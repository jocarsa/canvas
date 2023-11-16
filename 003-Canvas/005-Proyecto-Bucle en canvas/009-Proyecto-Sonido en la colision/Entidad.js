function calculaReflejo(angulo, normal) {
  const reflejoRad = 2 * normal - angulo;
  let reflejoAjustado = reflejoRad % (2 * Math.PI);
  if (reflejoAjustado < 0) {
    reflejoAjustado += 2 * Math.PI;
  }
  return reflejoAjustado;
}

class Entidad{
    constructor(){
        this.x;
        this.y;
        this.direccion;
        this.color;
        this.velocidad = 5;
    }
    
    colisiona() {
        if (this.x < 0 || this.x > 512) {
            this.direccion = calculaReflejo(this.direccion, Math.PI/2);
            this.suena()
        }
        if (this.y < 0 || this.y > 512) {
          this.direccion = calculaReflejo(this.direccion, 0);
            this.suena()
        }
        
  }
    suena(){
        sonido.currentTime = 0;
        sonido.play()
    }
    dibuja(){
        contexto.fillStyle = entidad1.color;
        contexto.beginPath();
        contexto.arc(this.x,this.y,20,0,Math.PI*2,true);
        contexto.fill();
    }
    mueve(){
        this.x += Math.cos(this.direccion*this.velocidad);
        this.y += Math.sin(this.direccion*this.velocidad);
        this.colisiona();
        this.dibuja();
    }
}