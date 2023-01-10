class Ninja{
    constructor(nombre,salud){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=3;
    }

    sayName(){
        console.log("El nombre del nuevo ninja es "+ this.nombre);
    }
    showStats(){
        console.log("Nombre:"+ this.nombre +"\nFuerza:"+this.fuerza+"\nSalud:"+ this.salud);
    }
    drinkSake(){
        this.salud+=10;
    }
}
const ninja1= new Ninja("Hasbulla",10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
