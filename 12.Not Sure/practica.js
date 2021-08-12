let trabajar = "trabajar 8hs";
let estudiar = "estudiar 2hs";
let trabajosPracticos = "hacer los trabajos practicos 4hs";
let tareasDeLaCasa = "limpiar la casa 1h";
let rest = "descansar 4hs";

for(i=0; i<14; i++){
    if(i == 0){
        console.groupCollapsed("Semana 1");
    }

    console.groupCollapsed("%c Dia " + (i+1), "color: orange")
    console.log(trabajar);
    console.log(estudiar);
    console.log(trabajosPracticos);
    console.log(tareasDeLaCasa);
    console.log(rest);
    console.groupEnd();

    if(i==6){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}