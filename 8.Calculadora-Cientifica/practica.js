class Calculadora{
    constructor(){

    }

sumar(num1, num2){
    return parseInt(num1) + parseInt(num2);
}

restar(num1, num2){
    return parseInt(num1) - parseInt(num2);
}

multiplicar(num1, num2){
    return parseInt(num1) * parseInt(num2);
}

dividir(num1, num2){
    return parseInt(num1) / parseInt(num2);
}

potenciar(base, exponente){
    return base**exponente
}

raizCuadrada(base){
    return Math.sqrt(base);
}

raizCubica(base){
    return Math.cbrt(base);
}

}

calculadora = new Calculadora();

alert("Eliga a continuacion la operacion que desea realizar.")
let operacion = prompt("1-Suma; 2-Resta; 3-Multiplicacion; 4-Division; 5-Potencia, 6-Raiz Cuadrada; 7-Raiz Cubica");

if(operacion == 1){
    numero1 = prompt("Primer numero para sumar: ");
    numero2 = prompt("Segundo numero para sumar: ");
    resultado = calculadora.sumar(numero1, numero2);
    alert(`Resultado: ${resultado}`);
}
if(operacion == 2){
    numero1 = prompt("Primer numero para restar: ");
    numero2 = prompt("Segundo numero para restar: ");
    resultado = calculadora.restar(numero1, numero2);
    alert(`Resultado: ${resultado}`);
}
if(operacion == 3){
    numero1 = prompt("Primer numero para multiplicar: ");
    numero2 = prompt("Segundo numero para multiplicar: ");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`Resultado: ${resultado}`);
}
if(operacion == 4){
    numero1 = prompt("Primer numero para dividir: ");
    numero2 = prompt("Segundo numero para dividir: ");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`Resultado: ${resultado}`);
}
if(operacion == 5){
    numero1 = prompt("Numero a potenciar");
    numero2 = prompt("Exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`Resultado: ${resultado}`);
}
if(operacion == 6){
    numero1 = prompt("Sacar la raiz cuadrada de: ");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Resultado: ${resultado}`);
}
if(operacion == 7){
    numero1 = prompt("Sacar la raiz cubica de: ");
    resultado = calculadora.raizCubica(numero1);
    alert(`Resultado: ${resultado}`);
}