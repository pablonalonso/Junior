let free = true;

const puedePasar = (hora)=>{
    let edad = prompt("Cual es tu edad?");
    if(edad > 18){
        if(hora>=2 && hora<=7 && free==true){
        alert("Puede pasar GRATIS a la fiesta por ser la primera persona despues de las 2AM.")
        free=false;
        }else{
            alert("Podes pasar pero tenes que pagar entrada. ")
        }
    }
    else{
        alert("No puede pasar por ser menor de edad. ")
    }
}

puedePasar(23);
puedePasar(1);
puedePasar(2);