if(true){
    console.log("hola mundo");
}
//operador ternario
condition ? true : false


var numero = 1;
var resultado = numero === 1 ? "si soy uno" : "no soy uno";

//piedra papel o tijera

var piedra = 3;
var papel = 2;
var tijera = 1;

var juego = function(yo, cpu){
    if((yo == piedra && cpu == papel)||(yo == piedra && cpu == tijera) || (yo == tijera && cpu == papel)){
        console.log("gano usuario");
    }else if((yo == piedra && cpu == piedra)||(yo == tijera && cpu == tijera)||(yo == papel && cpu == papel)){
        console.log("empate");
    }else if((cpu == piedra && yo == papel)||(cpu == piedra && yo == tijera) || (yo == papel && cpu == tijera)){
        console.log("gana cpu");
    }
}
    


