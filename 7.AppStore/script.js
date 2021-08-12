class App{
    constructor(nombre, descargas, puntuacion, peso){
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalada = false;
        this.abierta = false;
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("Aplicacion instalada correctamente.")
        }
    }
    
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("Aplicacion desinstalada con exito.")
        }
    }

    abrir(){
        if(this.instalada == true ){
            if(this.abierta == false){
                this.abierta = true;
                alert("Aplicacion iniciada con exito")
            }
            else{
                alert("LA aplicacion ya se encuentra abierta.")
            }
            
        }
        else{
            alert("Debe de instalar la aplicacion para abrirla")
        }
    }


    cerrar(){
        if(this.instalada == true){
            if(this.abierta == true){
                this.abierta = false;
                alert("Aplicacion cerrada con exito ")
            }else{
                alert("La aplicacion ya se encuentra cerrada")
            }
        }else{
            alert("Debe de instalar la aplicacion para poder cerrarla")
        }
    }


    showAppInfo(){
        return `
        <b style='color: orange'><u>${this.nombre}</u></b><br>
        <b style='color: violet'> Descargas: </b><b style='color: lightgreen'><u>${this.descargas}</u></b><br>
        <b style='color: violet'> Puntuacion: </b><b style='color: lightgreen'><u>${this.puntuacion}</u></b><br>
        <b style='color: violet'> Peso: </b><b style='color: lightgreen'><u>${this.peso}</u></b><br><br>
        `;
    }
}

FIFA15 = new App("FIFA 15","100 millones", "5 Estrellas", "10GB")
NeedForSpeed = new App("Need For Speed","40 millones", "5 Estrellas", "92GB")
Asphalt9 = new App("Asphalt 9","50 millones", "5 Estrellas", "15GB")
PES21 = new App("PES 21","30 millones", "5 Estrellas", "5GB")
ResidentEvil = new App("Resident Evil 6","120 millones", "5 Estrellas", "12GB")
FarCry6 = new App("FarCry 6","100 millones", "25 Estrellas", "5GB")
Outlast = new App("Outlast","100 millones", "10 Estrellas", "2GB")

document.write(FIFA15.showAppInfo());
document.write(NeedForSpeed.showAppInfo());
document.write(Asphalt9.showAppInfo());
document.write(PES21.showAppInfo());
document.write(ResidentEvil.showAppInfo());
document.write(FarCry6.showAppInfo());
document.write(Outlast.showAppInfo());

