var estudiantes = ["daniel","betza","cesar","miriam"]

var saludar = function(estudiante){
    console.log(`Hola ${estudiante}`)
}

while(estudiantes.length > 0){
    var a = estudiantes.shift()
    saludar(a)
}