var estudiantes = ["maria","sergio","rosa","daniel"];

function saludarEstudiantes(estudent){
    console.log(`Hola ${estudent}`);
}

for(var i=0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}