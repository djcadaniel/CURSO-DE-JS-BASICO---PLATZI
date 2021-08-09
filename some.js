var articulos = [
    { nombre: "bici", costo: 3000},
    { nombre: "tv", costo: 2500 },
    { nombre: "libro",costo:320 },
    { nombre: "celular",costo:10000 },
    { nombre: "laptop",costo:20000},
    { nombre: "teclado",costo:500 },
    { nombre: "audifonos",costo:1700 }
]

var articulosBaratos = articulos.some(function(art){
    return art.costo <= 700
})