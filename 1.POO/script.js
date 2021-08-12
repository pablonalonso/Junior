class Animal{
    constructor(especie, edad, color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info=`Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}.`
    }
    verInformacion = ()=>{
        document.write(this.info + "<br>")
    }
}

class Perro extends Animal{
    constructor(especie,edad,color, raza){
        super(especie, edad, color);
        this.raza = null;
    }

    set setRaza(newName){
        this.raza=newName;
    }
    get getRaza(){

    }
}

const perro = new Perro("perro", 10, "rojo", "doberman");
const gato = new Animal("gato", 30, "verde");
const loro = new Animal("loro", 2, "naranja");

perro.setRaza = "Pedro";
document.write(perro.info, perro.raza);