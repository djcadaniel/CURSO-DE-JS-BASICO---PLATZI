var auto = {
    marca : "nissan",
    color: "azul",
    precio: 35000
}

function newAuto(marca, color, precio){
    this.marca = marca;
    this.color = color;
    this.precio = precio;
}

var auto1 = new newAuto("toyota","rojo",3500);
var arrayAuto = auto1;

//para que se repitan
for(var i=0; i<=30; i++){
    console.log(arrayAuto);
}   
//para ingresar los parametros seria asi:

var carro=[];
cantidad = prompt("Ingresa cantidad");

for(var a=0; a<=cantidad-1; a++){
    marca = prompt("Ingresa marca");
    color = prompt("Ingresa color");
    precio = prompt("Ingresa precio");
    carro[] = new newAuto(marca, color, precio);
}


