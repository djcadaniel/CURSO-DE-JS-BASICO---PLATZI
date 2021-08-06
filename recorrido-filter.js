//mi array contiene a objetos
var articulos = [
    { nombre : "bici", costo:3000 },
    { nombre: "tv", costo: 2500 },
    { nombre: "libro",costo:320 },
    { nombre: "celular",costo:10000 },
    { nombre: "laptop",costo:20000},
    { nombre: "teclado",costo:500 },
    { nombre: "audifonos",costo:1700 }
]

 //filter genera un nuevo array, filtrara cosas si es verdad o falso, lo mete en un nuevo array
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
})

    // var auto = {
    //     color: "azul",
    //     anio: 2007,
    //     modelo: "optra",
    //     marca: "chevrolet"
    // }

    // function miAuto(color, anio, modelo, marca){
    //     this.color = color;
    //     this.anio = anio;
    //     this.modelo = modelo;
    //     this.marca = marca;
    // }

    // var autoNuevo1 = new miAuto("blue",2010, "nisan","toyota");