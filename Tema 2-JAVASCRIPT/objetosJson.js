var coche = {
    modelo: "Mercedes Clase A",
    velocidadMaxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.antiguedad, this.velocidadMaxima);
    }
}

var cochesDiv = document.getElementById("coches");

var titleH2 = document.createElement("h2");
titleH2.textContent = coche.modelo;

cochesDiv.appendChild(titleH2);

coche.mostrarDatos();