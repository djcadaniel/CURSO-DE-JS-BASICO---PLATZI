auto = {
    marca : 'toyota',
    color : 'azul'
}

function miAuto(m,c){
    this.marca = m;
    this.color = c;
}

var carros =[];
function ver(){
    var cantidad = prompt('Ingrese cantidad de autos');
    for(var i=0; i<cantidad; i++){
      
        var mar = prompt('Ingresa la marca del carro:');
        var col = prompt('Ingresa el color del carro:');
        carros.push(new miAuto(mar, col));
    }
        
    for(car of carros){
        console.log(carros);
    }
}   