let cantidad = prompt("Cuantos alumnos son?");
let aula = [];

for(i=0; i<cantidad; i++){
    aula[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,posicion)=>{
    let presencia = prompt(nombre);
    if(presencia == "p"){
        aula[posicion][1]++;
    }
}

for(i=0; i<5; i++){
    for(alumno in aula){
        tomarAsistencia(aula[alumno][0],alumno);
    }
}

for(alumno in aula){
    let resultado = `
    <b style='color: green'>${aula[alumno][0]}:</b><br>
    <b style='color: blue'>Presencias:${aula[alumno][1]}</b><br>
    <b style='color: violet'>Ausencias:${5 - aula[alumno][1]}</b><br>
    `;
    if(5 - aula[alumno][1] > 2){
        resultado+= "<b style='color:red'>Reprobado por inasistencias</b><br><br>"
    }
    document.write(resultado)
}



