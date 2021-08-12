const materias = {
    fisica: [70, 7, 3, "fisica"],
    lengua: [95, 4, 3, "lengua"],
    matematica: [65, 10,3, "matematica"],
    ingles: [50, 9, 1, "ingles"],
    programacion: [90, 9, 2, "programacion"]
}

const aprobo = ()=>{
    for(materia in materias){
        console.log(materias[materia][3]);

         let asistencia = materias[materia][0];
         let promedio = materias[materia][1];
         let trabajosPracticos = materias[materia][2];

         //VALIDACION DE ASISTENCIAS
         if(asistencia >= 70){
            console.log("%c  Asistencia aprobada", "color: green");
         }else{
            console.log("%c  Asistencia desaprobada", "color: red");
         }

         //VALIDACION DE PROMEDIO
         if(promedio >= 7){
            console.log("%c  Promedio Aprobado", "color: green");
         }else{
            console.log("%c  Promedio desaprobado", "color: red");
         }

         //VALIDACION DE TRABAJOS PRACTICOS
         if(trabajosPracticos >= 3){
            console.log("%c  Trabajos Aprobados", "color: green");
         }else{
            console.log("%c  Trabajos Desaprobados", "color: red");
         }
    }
}

aprobo()