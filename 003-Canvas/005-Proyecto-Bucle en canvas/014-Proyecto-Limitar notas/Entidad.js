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
        this.notas = ['C','E','G']
        this.colores = ['red','grey','yellow','orange','brown','blue','green']
        this.aleatorio = Math.floor(Math.random()*this.notas.length)
        this.nota = this.notas[this.aleatorio]
        this.x;
        this.y;
        this.direccion;
        this.color = this.colores[this.aleatorio];
        this.velocidad = 5;
        this.octava = Math.round(Math.random()*2)+3
        this.sonido = new Audio("../piano/"+this.nota+""+this.octava+".mp3")
    }
    
    colisiona() {
        if (this.x < 0 || this.x > anchura) {
            this.direccion = calculaReflejo(this.direccion, Math.PI/2);
            this.suena()
        }
        if (this.y < 0 || this.y > altura) {
          this.direccion = calculaReflejo(this.direccion, 0);
            this.suena()
        }
        
  }
    suena(){
        this.sonido.currentTime = 0;
        this.sonido.play()
    }
    dibuja(){
        contexto.fillStyle = this.color;
        contexto.beginPath();
        contexto.arc(this.x,this.y,5,0,Math.PI*2,true);
        contexto.fill();
    }
    mueve(){
        this.x += Math.cos(this.direccion*this.velocidad);
        this.y += Math.sin(this.direccion*this.velocidad);
        this.colisiona();
        this.dibuja();
    }
}