// •	Crear clases y objetos.
// •	Definir atributos y métodos.

let petsFree = [];
class Mascotas {
    name ;
    age ;
    chill ;
    ready ;
    
    constructor(name,age,chill,ready){
        this.name = name;
        this.age = age;
        this.chill = chill;
        this.ready = ready ;
    }

    savePet(){

        petsFree.push(this.name)
    }
    
    cry(){
        if (this.chill===true){
            console.log(`esta mascota ${this.name} llora mucho`)
        }else{
            console.log(`esta mascota ${this.name} es silenciosa`)
        }
    }
    meet(){
        console.log(`hola ,te presento a ${this.name} y tengo ${this.age} años `);
        if (this.ready === true) {
          this.savePet();
        }
    }
}
class Persona{
    name;
    age ; 
    adopcion ;
    constructor (name,age,adopcion){
        this.name = name;
        this.age = age ;
        this.adopcion = adopcion;
    }

    meetHuman(){
        console.log(`bienbenido ${this.name},tienas  ${this.age}`);

        if(this.adopcion === true){
            this.meetPets();
        }

    }
    meetPets(){
        console.log('te presetamos a :'+ petsFree);
        
    }
}

let person1 = new Persona ('sebas',28,true)
person1.meetHuman();



let mascota1 = new Mascotas('kira',3,true,true)
let mascot2 = new Mascotas('manchas', 6, false)
// console.log(mascota1.name);
mascot2.meet();
mascota1.meet();

mascota1.cry();


