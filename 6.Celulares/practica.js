class celulares{
    constructor(nombre, color,peso,resolucionDePantalla, resolucionDeCamara, memoriaRAM){
        this.n = nombre
        this.c = color;
        this.p = peso;
        this.rdp = resolucionDePantalla;
        this.rdc = resolucionDeCamara;
        this.ram = memoriaRAM;
        this.encendido = false;
    }

    presionarBotonDeEncendido(){
        if(this.encendido = false){
            this.encendido = true;
            alert("Celular encendido con exito.");
        }
        else{
            this.encendido = false;
            alert("Celular apagado exitosamente. ")
        }
    }

    reiniciar(){
        if(this.encendido = true){
            this.encendido = false;
            alert("Reiniciando celular. Aguarde un segundo...")
            this.encendido = true;
            alert("Celular reiniciado con exito!")
        }
    }

    tomarFoto(){
        alert(`Se ha capturado una foto con exito con una camara de ${this.rdc} pixeles. `)
    }

    screenshot(){
        alert(`Se ha hecho captura de pantalla con exito con una resolucion de pantalla de ${this.rdp}`)
    }

    mobileInfo(){
        return `
        <b style='color: green'>${this.n}</b><br>
        Color: <b style='color: orange'>${this.c}</b><br>
        Peso: <b style='color: pink'>${this.p}</b><br>
        Resolucion De Pantalla: <b style='color: lightblue'>${this.rdp}</b><br>
        Resolucion De Camara: <b style='color: yellow'>${this.rdc}</b><br>
        Memoria RAM: <b style='color: lightgreen'>${this.ram}</b><br>
        `
    }
}


class celularFullPro extends celulares{
    constructor(nombre, color, peso,resolucionDePantalla, resolucionDeCamara, memoriaRAM, resolucionDeCamaraExtra){
        super(nombre, color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRAM);
        this.rdcEE = resolucionDeCamaraExtra;
    }

    grabarEnCamaraLenta(){
        alert("Estas grbando en camara lenta. ");
    }

    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial. ");
    }

    obtenerInfoAltaGama(){
        return this.mobileInfo() +  `Resolucion De Camara Extra: <b style='color: purple'>${this.rdcEE}</b><br>`
    }
}

iphoneX = new celularFullPro("IphoneX","Rojo", "200mg", "2.5 x 1.3", "12 MPX", "3 GB", "10MPX");
samsung = new celularFullPro("Samsung","Verde", "500mg", "2.0 x 1", "9 MPX", "2 GB", "5PX");

document.write(
    `${iphoneX.obtenerInfoAltaGama()}<br>
     ${samsung.obtenerInfoAltaGama()}<br>`
)