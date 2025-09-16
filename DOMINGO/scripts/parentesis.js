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

const newStack = new Stack();

const balancingElements = ["(",")","{","}","[","]"];

const inputText = document.getElementById("balance");

inputText.addEventListener("keypress", (e)=>{
  let element = e.key;

  if (balancingElements.includes(element)) {
    console.log("elemento en el array : ", element );
    pushToStack(element)
    
  }
  
})

function pushToStack(element) {
  newStack.addElement(element)

  
}
