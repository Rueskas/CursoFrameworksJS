var nombre = "Rueskas"
var altura = 173

var concatenacion = nombre + " " + altura + " cm"
console.log(concatenacion);
imprimir(nombre, altura);

var nombres = ["Sergio", "Belen", "Laura", "Antonio"];
/*
for(var i = 0 ; i < nombres.length ; i++){
    console.log(nombres[i++]);
}
*/

nombres.forEach(nombre => {
    console.log(nombre);
})

/*
var datos = document.getElementById("datos");

datos.innerHTML = `

    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h3>Mido ${altura}</h3>
    
`;

if(altura >= 180){
    datos.innerHTML += "<h4>Soy una persona alta</h4>";
}
else{
    datos.innerHTML += "<h4>Soy una persona baja</h4>";
}

for(var i = 2000 ; i < 2020 ; i++){
    datos.innerHTML += "<h2>Estamos en el año: " + i +"</h2>"
}
*/

function mostrarInformacion(nombre, altura) {

    var datos = `

    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h3>Mido ${altura}</h3>
    
`;

    return datos;
}

function imprimir(nombre, altura){
    
    var elementoDatos = document.getElementById("datos");
    elementoDatos.innerHTML = mostrarInformacion(nombre, altura);
}