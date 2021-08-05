var miAuto = {
    marca : "Toyota",
    modelo : "Corolla",
    annio : 2020,
    detalleDelAuto : function(){
        console.log(`Auto: ${this.marca} ${this.modelo}`)
    }
}

//funcion constructora
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("tesla","model 3",2020);
var autoNuevo2 = new auto("tesla","model x",2021);
var autoNuevo3 = new auto("tesla","model 100",2018);
var autoGit = new auto('git','github',2021)
