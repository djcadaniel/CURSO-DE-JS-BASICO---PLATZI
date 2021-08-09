var miAuto = {
    marca : "Toyota",
    modelo : "Corolla",
    anio: 2020,
    detalleAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anio}`)
    }
}
//para traer a los valores del objeto
miAuto.marca
miAuto.detalleAuto()
