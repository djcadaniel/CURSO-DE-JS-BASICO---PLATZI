    //mi array contiene a objetos
    var articulos = [
        { nombre: "Bicicleta", costo: 3000 },
        { nombre: "TV", costo: 2500 },
        { nombre: "Libro", costo: 320 },
        { nombre: "Celular", costo: 10000 },
        { nombre: "Laptop", costo: 20000 },
        { nombre: "Teclado", costo: 500 },
        { nombre: "Audifonos", costo: 1700 },
    ];
//trae todo
    var nombreArticulos = articulos.map(function(articulo){
        return articulo.nombre
    });
