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
        this.notas = ['C','D','E','F','G','A','B']
        this.colores = [
            [255,0,0],
            [130,130,130],
            [255,255,0],
            [255,127,0],
            [132,61,35],
            [0,0,255],
            [0,255,0]
        ]
        this.aleatorio = Math.floor(Math.random()*this.notas.length)
        this.nota = this.notas[this.aleatorio]
        this.x;
        this.y;
        this.direccion;
        this.color = this.colores[this.aleatorio];
        this.velocidad = 5;
        this.octava = Math.round(Math.random()*2)+3
        this.sonido = new Audio("../piano/"+this.nota+""+this.octava+".mp3")
        this.opacidad = 1;
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
        this.opacidad = 1;
    }
    dibuja(){
        
        contexto.fillStyle = "rgba("+this.color[0]+","+this.color[1]+","+this.color[2]+","+this.opacidad+")";
        contexto.strokeStyle = "rgb("+this.color[0]+","+this.color[1]+","+this.color[2]+")";;
        contexto.beginPath();
        contexto.arc(this.x,this.y,25,0,Math.PI*2,true);
        contexto.fill();
        contexto.stroke();
    }
    mueve(){
        if(this.opacidad > 0){
            this.opacidad -= 0.002
        }
        this.x += Math.cos(this.direccion*this.velocidad);
        this.y += Math.sin(this.direccion*this.velocidad);
        this.colisiona();
        this.dibuja();
        //if(this.y < 0){this.y = 25;}
        //if(this.y > anchura){this.y = altura-25;}
        //if(this.x < 0){this.x = 25;}
        //if(this.x > anchura){this.x = anchura-25;}
    }
}