materias = {
    fisica: ["Dr Dre","Eminem", "Lil Baby", "Lil Durk", "Drake", "Migos"],
    programacion: ["Dalto","leo"],
    logica: ["Guardiola","messi", "xavi alonso", "iniesta", "busquets", "etoo"],
    quimica: ["Bianichi", "Lucho", "Martin", "messi"]
}

const inscribir = (alumno,materia) => {
    alumnos = materias[materia];
    alumnos.shift();
    if(alumnos.length  >= 5){
        document.write(`
        <b style='color: red'>Lo siento ${alumno}, no hay cupos libres para la clase de ${materia}</b><br><br>`);
    }
    else{
        document.write(`
        <b style='color: lightgreen'>Se ha incripto a ${alumno} en la clase de ${materia}.</b><br><br>`)
    }
}

inscribir("pedrito", "fisica");
inscribir("pablo", "programacion");
inscribir("jordan", "logica");
inscribir("lil yachty", "quimica");