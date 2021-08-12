const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre, modelo, precio){
    img = "<img src='Golden-Key.png' class='key-img'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h2 id='${modelo}'>${modelo}</h2>`;
    precio = `<p><b>${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}

let fragmento = document.createDocumentFragment();

for(i=1; i<=20; i++){
    let modelo = Math.round(Math.random()*1000);//genera un numero entre 30 y 40
    let precio = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i}`, `Modelo: ${modelo}`, `Precio: $${precio}`);
    let div = document.createElement("DIV");
    div.tabIndex = i;
    div.classList.add(`item-${i}`, "flex-item");
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    fragmento.appendChild(div);
}

contenedor.appendChild(fragmento);