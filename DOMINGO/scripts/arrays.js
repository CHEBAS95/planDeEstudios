//----------------LINEAL---------------------------------
// const numLineal = [4, 2, 9, 7, 3];
//
// let encontrado = false;
//let findNumb = 7;
// for (let i = 0; i < numLineal.length; i++) {
//   if (numLineal[i] === findNumb) {
//     console.log(`El número ${findNumb} se encontró en el índice ${i}.`);
//     encontrado = true;
//     break; // Detenemos el bucle porque ya encontramos el número
//   }
// }

// // Si no se encontró, mostramos un mensaje al final
// if (!encontrado) {
//   console.log(`El número ${findNumb} no se encuentra en el arreglo.`);
// }
/*---------------------ALGORITMOS EN ARRAYS ------------------*/

// BINARIA
// const list1 = [1, 3, 5, 7, 9, 11];
// const list2 = [2, 4, 6, 8, 10];

// function binarySearch(list, num) {
//   let low = 0;
//   let high = list.length - 1;

//   while (low <= high) {
//     let middle = Math.floor((low + high) / 2); // Punto medio

//     if (list[middle] === num) {
//       console.log(`Número encontrado: ${list[middle]}, en el índice: ${middle}`);
//       return middle; // Devuelve el índice si se encuentra
//     } else if (list[middle] < num) {
//       console.log(`El número ${num} es mayor que ${list[middle]}, ajustando límites.`);
//       low = middle + 1; // Ajusta el límite inferior
//     } else {
//       console.log(`El número ${num} es menor que ${list[middle]}, ajustando límites.`);
//       high = middle - 1; // Ajusta el límite superior
//     }
//   }

//   console.log(`El número ${num} no está en la lista.`);
//   return -1; // Devuelve -1 si no se encuentra
// }

// binarySearch(list1, 5);
// binarySearch(list1, 7);
//----------PENDIENTA LA BINARIA POR MI MISMO
//------------BUSCAR MIN Y MAX EN UN ARRAY --------------
//-------------------------------------------------------
//------------ENCONTRAR DUCPLICASDOS--------------------

// function findDuplicates(arr) {
//   let wihtoutDuplicade = [];
//   let duplicades = [];

//   arr.forEach((element) => {
//     if (!wihtoutDuplicade.includes(element)) {
//       wihtoutDuplicade.push(element);
//     } else {
//       duplicades.push(element);
//     }
//     return duplicades;
//   });
//   console.log("array original :", arr);
//   console.log("array sin duplicados :", wihtoutDuplicade);
//   console.log("elementos duplicados :", duplicades);
// }

// findDuplicates([1, 2, 3, 4, 5, 1, 6, 2]);
// //Debería devolver: [1, 2]

// findDuplicates([10, 20, 30, 40]);
// // // Debería devolver: []

// findDuplicates([5, 5, 5, 5]);
// Debería devolver: [5]
//-------------REVERTIR CADENA----------------------
// function reverse(string) {
//   let result = '';

//   // Corregido: solo iterar hasta que el array esté vacío
//   for (let i = string.length-1; i >= 0; i--) {

//     result += string[i]

//   }

//   return result; // Convertir array de vuelta a string
// }
// console.log(reverse("hola"));
// console.log(reverse("hola creo que estoy avanzando"));
//-------------Pila Stack ----------------------
class Stack {
  constructor() {
    this.arrayStack = [];
  }

  stateProcess(state) {
    const message = `${state} arrayStack...`;
    console.log(`${message}`);
    this.addToConsole("stackConsole", message);
  }

  addToConsole(consoleId, message) {
    const console = document.getElementById(consoleId);
    const line = document.createElement("div");
    line.className = "console-line";
    line.textContent = `> ${message}`;
    console.appendChild(line);
    console.scrollTop = console.scrollHeight;
  }

  addElement(data) {
    this.stateProcess("agregando a");
    this.arrayStack.push(data);
    this.addToConsole(
      "stackConsole",
      `Elemento "${data} agregado. Stack : [${this.arrayStack.join(", ")}]"`
    );
  }

  deleteElement() {
    if (this.isEmpty()) {
      this.addToConsole(
        "stackConsole",
        "❌ No se puede eliminar : stack vacio"
      );
      return null;
    }
    this.stateProcess("eliminando de");
    const removed = this.arrayStack.pop();
    console.log(
      "stackConsole",
      `Elemento ${removed} eliminado. Stack :[${this.arrayStack.join(", ")}]`
    );
    return removed;
  }

  peek() {
    if (this.arrayStack.length === 0) {
      this.addToConsole("stackConsole", "❌ stack vacio");
      return null;
    }
    this.stateProcess("mostrando tope de ");
    let lastElement = this.arrayStack[this.arrayStack.length - 1];
    console.log("stackConsole", `Tope del Stack: "${lastElement}"`);
    return lastElement;
  }
  size() {
    this.stateProcess("mostrando elementos de");
    this.addToConsole(
      "stackConsole",
      `Tamaño del stack: ${this.arrayStack.length}`
    );
    return this.arrayStack.length;
  }

  clear() {
    this.arrayStack = [];
    this.addToConsole("stackConsole", "🧹 Stack limpiado");
  }
}

// module.exports ={ Stack }
class Queue {
  constructor() {
    this.queue = [];
  }

  stateProcess(state) {
    const message = `${state} cola...`;
    console.log(message);
    this.addToConsole("queueConsole", message);
  }

  addToConsole(consoleId, message) {
    const console = document.getElementById(consoleId);
    const line = document.createElement("div");
    line.className = "console-line";
    line.textContent = `> ${message}`;
    console.appendChild(line);
    console.scrollTop = console.scrollHeight;
  }

  enqueue(data) {
    this.stateProcess(`${data} agregado`);
    this.queue.push(data);
    this.addToConsole(
      "queueConsole",
      `Elemento "${data}" agregado. Queue: [${this.queue.join(", ")}]`
    );
    return this.queue;
  }

  dequeue() {
    this.stateProcess(`eliminando primer elemento`);
    if (this.queue.length === 0) {
      this.stateProcess("sin elementos");
      this.addToConsole("queueConsole", "❌ Queue vacía");
      return null;
    } else {
      const removed = this.queue.shift();
      this.addToConsole(
        "queueConsole",
        `Elemento "${removed}" eliminado. Queue: [${this.queue.join(", ")}]`
      );
      return removed;
    }
  }

  peek() {
    this.stateProcess("obteniendo el primero de");
    let firstElement = this.queue[0];
    if (firstElement === undefined) {
      this.addToConsole("queueConsole", "❌ Queue vacía");
      return null;
    } else {
      this.addToConsole(
        "queueConsole",
        `Frente de la queue: "${firstElement}"`
      );
      return firstElement;
    }
  }

  isEmpty() {
    const empty = this.queue.length === 0;
    this.stateProcess(empty ? "vacía la" : "existen elementos en");
    return empty;
  }

  size() {
    let sizeArr = this.queue.length;
    const message =
      sizeArr === 0 ? "sin elementos" : `con elementos ${sizeArr}`;
    this.addToConsole("queueConsole", `Tamaño de la queue: ${message}`);
    return sizeArr;
  }

  clear() {
    this.queue = [];
    this.addToConsole("queueConsole", "🧹 Queue limpiada");
  }
}
// Instancias globales
const stack = new Stack();
const queue = new Queue();

// Funciones del Stack
function pushToStack() {
  const input = document.getElementById("stackInput");
  const value = input.value.trim();
  if (value) {
    stack.addElement(value);
    input.value = "";
    updateStackVisualization();
  }
}

function popFromStack() {
  stack.deleteElement();
  updateStackVisualization();
}

function peekStack() {
  stack.peek();
  updateStackVisualization();
}

function clearStack() {
  stack.clear();
  updateStackVisualization();
}

function updateStackVisualization() {
  const container = document.getElementById("stackVisualization");
  const stackArray = stack.arrayStack;

  if (stackArray.length === 0) {
    container.innerHTML =
      '<div class="empty-state">Stack vacío - Añade elementos con Push</div>';
  } else {
    const stackContainer = document.createElement("div");
    stackContainer.className = "stack-container";

    stackArray.forEach((item, index) => {
      const element = document.createElement("div");
      element.className = "stack-item";
      if (index === stackArray.length - 1) {
        element.classList.add("stack-top");
      }
      element.textContent = item;
      stackContainer.appendChild(element);
    });

    container.innerHTML = "";
    container.appendChild(stackContainer);
  }

  // Actualizar información
  document.getElementById("stackSize").textContent = stackArray.length;
  document.getElementById("stackEmpty").textContent =
    stackArray.length === 0 ? "Sí" : "No";
  document.getElementById("stackTop").textContent =
    stackArray.length > 0 ? stackArray[stackArray.length - 1] : "N/A";
}

// Funciones de la Queue
function enqueueToQueue() {
  const input = document.getElementById("queueInput");
  const value = input.value.trim();
  if (value) {
    queue.enqueue(value);
    input.value = "";
    updateQueueVisualization();
  }
}

function dequeueFromQueue() {
  queue.dequeue();
  updateQueueVisualization();
}

function peekQueue() {
  queue.peek();
  updateQueueVisualization();
}

function clearQueue() {
  queue.clear();
  updateQueueVisualization();
}

function updateQueueVisualization() {
  const container = document.getElementById("queueVisualization");
  const queueArray = queue.queue;

  if (queueArray.length === 0) {
    container.innerHTML =
      '<div class="empty-state">Queue vacía - Añade elementos con Enqueue</div>';
  } else {
    const queueContainer = document.createElement("div");
    queueContainer.className = "queue-container";

    queueArray.forEach((item, index) => {
      const element = document.createElement("div");
      element.className = "queue-item";
      if (index === 0) {
        element.classList.add("queue-front");
      }
      element.textContent = item;
      queueContainer.appendChild(element);
    });

    container.innerHTML = "";
    container.appendChild(queueContainer);
  }

  // Actualizar información
  document.getElementById("queueSize").textContent = queueArray.length;
  document.getElementById("queueEmpty").textContent =
    queueArray.length === 0 ? "Sí" : "No";
  document.getElementById("queueFront").textContent =
    queueArray.length > 0 ? queueArray[0] : "N/A";
}

// Event listeners para Enter
document
  .getElementById("stackInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      pushToStack();
    }
  });

document
  .getElementById("queueInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      enqueueToQueue();
    }
  });

// Inicializar visualizaciones
updateStackVisualization();
updateQueueVisualization();
