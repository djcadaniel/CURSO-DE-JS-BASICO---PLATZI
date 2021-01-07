var estudiantes = ["daniel","rosa","pedro"];

function saludarEstudiantes(student){
    console.log(`Welcome ${student}`)
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}