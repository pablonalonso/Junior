const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["pedro", "messi", "maradona", "kempes", "dibu", "otmanedi", "cuti"],
        programacion: ["pedro", "messi", "cofla", "marcos", "mauricio", "raul", "gusti"],
        matematica: ["pedro", "cofla", "marcos", "mauricio", "raul", "gusti"],
        ingles: ["pedro", , "cofla", "marcos", "mauricio", "raul", "gusti"],
        historia: ["pedro", "cofla", "marcos", "mauricio", "raul", "gusti"],
    }

    if(materias[materia] != undefined){
        return [materias[materia],materia, materias];
    } else{
        return materias;
    }
}

const mostrarInformacion =(x)=>{
    let informacion = obtenerInformacion(x);
    if(informacion !== false){
        let materia = informacion[1];
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();

        document.write(`
        <b style='color: rgb(48, 184, 50)'>
        ---------------------------------------------------------
        </b>
        <li><b>Materia:</b> <b style='color: lightgreen'>${materia}</b></li>
        <li><b>Profesor:</b> <b style='color: orange'>${profesor}</b></li>
        <li><b>Alumnos:</b> <b style='color: violet'>${alumnos}</b></li><br>
        `);
    }
}

mostrarInformacion("fisica")

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal= 0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    document.write(`
    <b style='color: rgb(48, 184, 50)'>
    -----------------------------------------------------------
    </b>
     <li><b>Alumno:</b> <b style='color: orange'>${alumno}</b></li>
     <li><b > Cantidad De Materias Inscriptas: </b> <b style='color:orange'>${cantidadTotal}</b></li>
     <li><b> Materias: </b><b style='color: orange'>${clasesPresentes}</b></li></b><br>
    `
    );
}

cantidadDeClases("messi");
cantidadDeClases("gusti");





