var piedra = 3;
var tijera = 2;
var papel = 1;

function game(yo,cpu){
    if(((yo == 'piedra') && (cpu == 'piedra'))){
        console.log('empate');
    }else if(((yo == 'piedra') && (cpu == 'papel'))){
        console.log('gana usuario');
    }else if(((yo == 'piedra') && (cpu == 'tijera'))){
        console.log('gana usuario');
}

