var n = prompt("¿Cuántos carros deseas añadr?");
var autoNuevo= [];
function auto(marca,modelo,anio){
    this.marca = marca,
    this.modelo = modelo,
    this.anio = anio
}

for(var i = 0; i < n; i++){
    var marca = prompt("Marca:");
    var modelo = prompt("Modelo:");
    var anio = prompt("Año:");
    autoNuevo[i] = new auto(marca,modelo,anio);
    autoNuevo
}
