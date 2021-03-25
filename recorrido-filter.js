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

    //filter genera un nuevo array, filtrara cosas si es verdad o falso, lo mete en un nuevo array

    var articulosFlitrados = articulos.filter(function(articulo){
        return articulo.costo <= 500;
    });

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