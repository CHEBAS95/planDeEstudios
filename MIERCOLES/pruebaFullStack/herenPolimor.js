// •	Crear una clase Animal y luego extenderla con subclases como Perro y Gato. Implementar métodos específicos para cada uno, usando polimorfismo.

class Animal {
  constructor(name, longevity, color, cover, sound, medium) {
    this.name = name;
    this.longevity = longevity;
    this.color = color;
    this.cover = cover;
    this.sound = sound;
    this.medium = medium;
  }

  greet() {
    console.log(`hola te presento a : ${this.name}`);
  }

  long() {
    if (this.longevity <= 14) {
      console.log(this.medium === "domestico" ? 
        "vive poco si es para adoptar" : 
        "vive demasiado para ser salvaje"
      );
    } else {
      console.log(this.medium === "domestico" ? 
        "vive bastante para ser doméstico" : 
        "vive muy poco, su vida es ajetreada"
      );
    }
  }
  
  soundAnimal() {
    let soundAn = `${this.sound}`;

    switch (soundAn) {
      case "ladrido":
        console.log("es un perro");
        break;

      case "rugido":
        console.log("al parecer es un animal grande");
        if (this.cover === "pelo") {
          console.log("es un felino");
        } else if (this.cover === "piel") {
          console.log("es un paquidermo como rinoceronte o hipopótamo");
        }
        break;

      case "maullido":
        console.log("es un gatito");
        break;

      default:
        console.log("aun no sabemos que animal es ?");
        break;
    }
  }

  showInfo(){
    let message = {
      nombre : `su nombre es : ${this.name}`,
      edad : `su edad es : ${this.longevity}`,
      color : `su color de : ${this.color}`,
      covertura : `el tipo de cobertura es : ${this.cover}`,
      sonido : `el sonido que emite es : ${this.sound}`,
      habitad : `habitualmente esta en medio : ${this.medium}`
    }
  }
}

class Perro extends Animal {
  constructor(
    name,
    longevity,
    color,
    cover,
    sound,
    medium,
    friendly,
    yearsOld
  ) {
    super(name, longevity, color, cover, sound, medium); //herencia de atributos

    this.friendly = friendly; //polimorfirmo por parametro
    this.yearsOld = yearsOld;
  }

  greet() {
    super.greet(); //herencia de metodo
  }

  long() {
    super.long();

    if (this.longevity >= 14 && this.yearsOld >= 10) {
      //polimorfismos de metodos
      console.log("disfruta mochu a tu mascota ,ya esta adulta");
    } else {
      console.log("esta bebe cuidalo,");
    }
  }
}

class Gato extends Animal {
  constructor(name, longevity, color, cover, sound, medium, claws) {
    super(name, longevity, color, cover, sound, medium); //herencia de atributos

    this.claws = claws; //polimorfirmo por parametro
  }

  greet() {
    super.greet();
  }

  soundAnimal() {
    super.soundAnimal();
  }

  danger() {
    if (this.claws) {
      console.log("¡Cuidado, puede ser peligroso si lo enfadas!");
    }
  }
}

class Ave extends Animal{
  
}

const perro1 = new Perro(
  "tobi",
  14,
  "yellow",
  "pelo",
  "ladrido",
  "home",
  true,
  10
);

perro1.greet();
perro1.long();
perro1.soundAnimal();
console.log("--------------------------------------");

const perro2 = new Perro(
  "negro",
  14,
  "yellow",
  "pelo",
  "ladrido",
  "home",
  true,
  2
);
perro2.greet();
perro2.long();
