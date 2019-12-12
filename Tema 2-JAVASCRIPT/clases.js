class Coche{

    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad++;
    }


    disminuirVelocidad(){
        if(velocidad >0){
            this.velocidad--;
        }
    }
}

class Mini extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad)
        this.altura = 140;
    }
}

var coche1 = new Coche("BMW", 0, 2017);
var coche2 = new Coche("Mercedes", 0, 2018);
var coche3 = new Coche("Audi", 0, 2019);

console.log(coche1);
console.log(coche2);
console.log(coche3);

coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
console.log(coche1.velocidad);

var mini = new Mini("Golf", 100, 2000);
console.log("El mini mide: " + mini.altura);