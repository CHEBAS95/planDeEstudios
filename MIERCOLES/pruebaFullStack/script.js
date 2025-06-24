let petsFree = [];
let petsAdopted = [];
let personaActual = null;

class Mascotas {
    constructor(name, age, chill, ready) {
        this.name = name;
        this.age = age;
        this.chill = chill;
        this.ready = ready;
    }

    savePet() {
        petsFree.push(this);
    }

    cry() {
        return this.chill ? `${this.name} llora mucho.` : `${this.name} es silenciosa.`;
    }

    meet() {
        return `Hola, te presento a ${this.name} y tiene ${this.age} años.`;
    }
}

class Persona {
    constructor(name, age, adopcion) {
        this.name = name;
        this.age = age;
        this.adopcion = adopcion;
    }

    meetHuman() {
        if (this.adopcion) {
            personaActual = this;
            mostrarMascotasDisponibles();
        } else {
            alert(`${this.name} no está listo para adoptar.`);
        }
    }
}

// Crear instancias de mascotas
const mascota1 = new Mascotas('Kira', 3, true, true);
const mascota2 = new Mascotas('Manchas', 6, false, true);
const mascota3 = new Mascotas('Bola de Nieve', 1, true, true);

mascota1.savePet();
mascota2.savePet();
mascota3.savePet();

// Mostrar mascotas disponibles
function mostrarMascotasDisponibles() {
    const listaMascotas = document.getElementById("mascotasDisponibles");
    listaMascotas.innerHTML = '';

    petsFree.forEach(mascota => {
        const li = document.createElement("li");
        li.textContent = `${mascota.name} (Edad: ${mascota.age} años)`;
        li.onclick = () => mostrarDetallesMascota(mascota);
        listaMascotas.appendChild(li);
    });
}

// Mostrar detalles de una mascota
function mostrarDetallesMascota(mascota) {
    const detalleMascota = document.getElementById("detalleMascota");
    detalleMascota.innerHTML = `
        <p>${mascota.meet()}</p>
        <p>${mascota.cry()}</p>
    `;
    const adoptarBtn = document.getElementById("adoptarBtn");
    adoptarBtn.style.display = 'block';
    adoptarBtn.onclick = () => adoptarMascota(mascota);
}

// Adoptar mascota
function adoptarMascota(mascota) {
    petsAdopted.push(mascota);
    petsFree = petsFree.filter(pet => pet !== mascota);
    mostrarMascotasDisponibles();
    mostrarMascotasAdoptadas();
    alert(`${personaActual.name} ha adoptado a ${mascota.name}`);
}

// Mostrar mascotas adoptadas
function mostrarMascotasAdoptadas() {
    const listaAdoptadas = document.getElementById("mascotasAdoptadas");
    listaAdoptadas.innerHTML = '';

    petsAdopted.forEach(mascota => {
        const li = document.createElement("li");
        li.textContent = `${mascota.name} (Edad: ${mascota.age} años)`;
        listaAdoptadas.appendChild(li);
    });
}

// Crear una nueva persona
function crearPersona() {
    const personaName = document.getElementById("personaName").value;
    const personaAge = document.getElementById("personaAge").value;

    if (!personaName || !personaAge) {
        alert("Por favor, ingresa el nombre y la edad.");
        return;
    }

    const persona = new Persona(personaName, personaAge, true); // siempre puede adoptar
    persona.meetHuman();
}
