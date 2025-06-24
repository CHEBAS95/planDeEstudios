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
  constructor(){
    this.arrayStack = new Array;
  }


  stateProcess(state){
    console.log(`${state} arrayStack...`);
  }

  addElement(date){
    this.stateProcess("agregando a")
    this.arrayStack.push(date)
    console.log(this.arrayStack);
  }
  deleteElement(){
    this.stateProcess("eliminando de");
    this.arrayStack.pop();
     console.log(this.arrayStack);
  }
  peek(){
    this.stateProcess("mostrando tope de ");
    let lastElement = this.arrayStack[this.arrayStack.length-1];
    console.log(lastElement);
    return lastElement
  }
  isEmpty(){
    
    if(this.arrayStack.length===0){
      this.stateProcess("vacio el ")
    }else{
      this.stateProcess("tiene elementos")
    }
  }
  size(){
    this.stateProcess("mostrando elementos de ")
    console.log(this.arrayStack.length);
    
  }
}

// const newStack = new Stack();
// newStack.isEmpty()
// newStack.addElement("primero")
// newStack.size()
// newStack.addElement(4)
// newStack.addElement(8)
// newStack.addElement("ultimo")
// newStack.peek()
// newStack.isEmpty()
// newStack.deleteElement()
// newStack.deleteElement()
// newStack.size()
// newStack.peek()

class Queue {
  constructor(){
    this.queue = [];
  }
  
  stateProcess(state){
    console.log(`${state} cola...`);
  }
  enqueue(data){
    this.stateProcess(`${data} agregado`)
    this.queue.push(data)
    console.log(this.queue);
    
    return this.queue
  }
  dequeue(){
    this.stateProcess(`eliminando primer elemeto`)
    if(this.queue.length===0){
      this.stateProcess("sin elementoos")
      console.log(this.queue);
      return null
    }else{
      const removed = this.queue.shift()
      console.log(`elemento eliminado ${removed}`);
      return removed
    }
  }
  peek(){
    this.stateProcess("obteniendo el primero de ");
    let fisrtElement = this.queue[0]
    if(fisrtElement=== undefined){
      console.log("sin elementos ");
      return null
    }else{
      console.log(fisrtElement);
      return fisrtElement
    }
  }
  isEmpty(){
    const empty = this.queue.length === 0;
    this.stateProcess(empty ? "vacio el ": "existen elementos en ");
    return empty;
    }
  size(){
    let sizeArr = this.queue.length
    console.log(sizeArr === 0 ? "sin elementos": `con elementos ${sizeArr}`);
    
  }
}
const newQueue = new Queue();

newQueue.enqueue(3);
// newQueue.enqueue("primero");
// newQueue.enqueue(4);
// newQueue.enqueue("ultimo");
// newQueue.isEmpty()
// newQueue.peek()
newQueue.size()
// newQueue.dequeue()

const q = new Queue();
q.isEmpty();         // true
q.enqueue("A");      // Agrega A
q.enqueue("B");      // Agrega B
q.enqueue("C");      // Agrega C
q.peek();            // Muestra A
q.dequeue();         // Elimina A
q.peek();            // Muestra B
q.size();            // Muestra 2
q.isEmpty();         // false
