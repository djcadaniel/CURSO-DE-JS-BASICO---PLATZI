function auto(marca,modelo,anio){
    this.marca = marca,
    this.modelo = modelo,
    this.anio = anio
}

for(var i = 0; i < 2; i++){
    var marca = prompt("Marca:");
    var modelo = promp("Modelo:");
    var anio = prompt("Año:");
    var autoNuevo2 = new auto(marca,modelo,anio);
    autoNuevo2
}
