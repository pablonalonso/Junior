
const cuantoDineroTiene = (nombre)=>{
    let dinero = prompt(`Cuanto dinero tiene ${nombre}?`);
    dinero = parseInt(dinero);
    if(dinero>=2 && dinero<3.5) return(`A ${nombre} le alcanza para un Ben & Jerry's. Y le sobra:` + (dinero-2));
    else if(dinero>=3.5 && dinero<4.7) return(`A ${nombre} le alcanza para un Frigo. Y le sobra:` + (dinero-3.5));
    else if(dinero>=4.7 && dinero<6) return(`A ${nombre} le alcanza para un Nestle. Y le sobra:` + (dinero-4.7));
    else if(dinero>=6) return(`A ${nombre} le alcanza para un Kalise y un Magnum. Y le sobra:`+ (dinero-6));
}

console.log(cuantoDineroTiene("Swaggy"));
console.log(cuantoDineroTiene("Elab"));
console.log(cuantoDineroTiene("Calem"));

