var saludar = new Promise((resolve, reject) =>{

    setTimeout( () => {
        //let saludo = "Hola";
        let saludo = null;
        if(saludo){
            resolve(saludo);
        }
        else{
            reject("No hay saludo disponible");
        }
    }, 2000)
});

saludar
.then(result => {
    alert(result);
})
.catch(error =>{
    alert(error);
})