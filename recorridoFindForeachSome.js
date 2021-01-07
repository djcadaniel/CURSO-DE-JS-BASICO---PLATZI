var articulos = [
    { nombre:"Bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "libro", costo: 10000},
    {nombre:"celular", costo: 320},
    {nombre:"laptop", costo:20000},
    {nombre:"audifonos", costo:1700}
]

//FIND
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop";
});

//FOREACH
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

//SOME --- devuelve si es v o f
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})