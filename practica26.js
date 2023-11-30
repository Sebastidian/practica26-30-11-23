// Diseñar una función constructora que acepte un apodo, un número de vidas y un valor de carta (del 1 al 7). Además, se requiere incluir dos métodos como propiedades:
//  uno para reducir las vidas y otro para mostrar el apodo junto con la cantidad de vidas restantes.


function Juegos ( apodo,vidas,valorcartas){
    this.apodo= apodo;
    this.vidas= vidas;
    this.valorcartas= valorcartas;
    

    this.getJuegos= function(vidasMenos){
        this.vidas=this.vidas-vidasMenos;
     };
 
     this.showApodo = function (){
        alert(`El apodo es ${this.apodo} tiene ${this.vidas} vidas restantes`)
    }
}

let JuegosOne = new Juegos (prompt("Escriba el apodo"), Number(prompt(" Ingrese el numero de las vidas"), Number("Ingrese una carta del 1 al 7"))); 
JuegosOne.getJuegos(Number(prompt("Ingrese el numero de vidas que ha perdido")));
JuegosOne.showApodo();