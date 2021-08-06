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

var encuentraArticulo = articulos.find(function(arti){
    return arti.nombre === "laptop"
})