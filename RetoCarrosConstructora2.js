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
//para ingresar los parametros seria asi:

var carro=[];
cantidad = prompt("Ingresa cantidad");

for(var a=0; a<=cantidad-1; a++){
    marca = prompt("Ingresa marca");
    color = prompt("Ingresa color");
    precio = prompt("Ingresa precio");
    carro[a] = new newAuto(marca, color, precio);
}


