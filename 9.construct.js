var miAuto = {
    marca : "Toyota",
    modelo : "Corolla",
    annio : 2020,
    detalleDelAuto : function(){
        console.log(`Auto: ${this.marca} ${this.modelo}`)
    }
}

//function constructora

function auto(marca,modelo,anio){
    this.marca = marca,
    this.modelo = modelo,
    this.anio = anio
}

var autoNuevo = new auto("tesla","model 3",2020)
var autoNuevo2 = new auto("tesla","model x",2021)

//crear automaticamente 30 carros

var tot = 2
var count = 0

function auto(marca,modelo,anio){
    this.marca = marca,
    this.modelo = modelo,
    this.anio = anio
}

while(tot > count){
    var marca = prompt("marca:")
    var modelo = prompt("marca:")
    var anio = prompt("marca:")
    var autoNuevo = new auto(marca,modelo,anio)
    count += 1
}