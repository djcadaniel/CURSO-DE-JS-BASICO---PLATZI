var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
    

//para llamar
miAuto.marca
miAuto.annio
miAuto.modelo
//this
//hace referencia a su padre que es miAuto