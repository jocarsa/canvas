class Entidad{
    constructor(){
        this.x;
        this.y;
        this.direccion;
        this.color;
    }
    
    colisiona(){
        if(
            this.x < 0
            ||
            this.x > 512
            ||
            this.y < 0
            || 
            this.y > 512
        ){
            this.direccion += Math.PI
        }
        
    }
    dibuja(){
        contexto.fillStyle = entidad1.color;
        contexto.beginPath();
        contexto.arc(this.x,this.y,20,0,Math.PI*2,true);
        contexto.fill();
    }
    mueve(){
        this.x += Math.cos(this.direccion);
        this.y += Math.sin(this.direccion);
        this.colisiona();
        this.dibuja();
    }
}