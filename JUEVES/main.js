const prompt = require("prompt-sync")();
// // let edad = 0;
// // for (i = 1995; i <= 2024; i++) {
// //   let text = "feliz cumpleaños ";
// //   edad = edad + 1;
// //   console.log(text + i);
// //   console.log("edad: ", edad);
// // }
// //----coalescencia nula ------
// // let a;
// // let b = 5;
// // let result = a ?? b;
// // console.log(result);
// //------for para pares ---
// // for (let i = 1; i <= 5; i++) {
// //   console.log(i * 2);
// // }
// // for (let i = 0; i <= 10; i += 2) {
// //   console.log(i);
// // }
// //--primos por rango -----------
// let number = +prompt("ingresa el numero a detectar primos: ");
// console.log("el numero es ", number);

// let count = 0;

// for (let i = 0; i <= number; i++) {
//   if (number % i === 0) {
//     count++;
//   }
// }

// if (count === 2) {
//   console.log(`el ${number} es primo`);
// }
// // //----min de dos numeros ---------
// // let numA = +prompt("ingrese el numero primero: ");
// // let numB = +prompt("ingrese el segundo nuemro:  ");

// // function getMin(a, b) {
// //   a > b
// //     ? console.log(`numero ${b} es menor`)
// //     : console.log(`numero ${a} es menor`);
// // }

// // getMin(numA, numB);
// //-----elevear  a  a la x
// // let numA = +prompt("ingrese el numero a potenciar :");
// // let numPontecia = +prompt("ingrese la potencia: ");

// // function pow(a, b) {
// //   let result = 1;
// //   for (i = 1; i <= b; i++) {
// //     result *= a;
// //     console.log(result);
// //   }
// // }
// // pow(numA, numPontecia);
// //---------
// // function pow(x, n){
// //   let result = 1 ;
// //   for(i=0 ; i <n ; i++){
// //     result *= n
// //     console.log(result)

// //   }
// // }

// // let x = +prompt("x? :")
// // let n = +prompt("n ? :")

// // if(n <= 0){
// //   console.log(n , x)
// // }else{
// //   pow(x, n)
// // }

// //------
// // let salaries = {
// //   John: 100,
// //   Ann: 160,
// //   Pete: 130,
// // };

// // let total = 0;
// // for (const key in salaries) {
// //   let data = salaries[key];

// //   total += data;
// // }
// // console.log(total);
// //-------------------
// // let menu = {
// //   width: 200,
// //   height: 300,
// //   title: "My menu",
// // };

// // multiplyNumeric(menu);

// // function multiplyNumeric(object) {
// //   for (const key in object) {
// //     let data = object[key]
// //     if (typeof(data) == "number"){
// //        object[key] = data * 2;
// //     }
// //   }
// //   console.log(object);
// //   // console.log(menu.height*2);
// // }
// //-------------------
// // let ladder = {
// //   step: 0,
// //   up() {
// //     this.step++;
// //    return this
// //   },
// //   down() {
// //     this.step--;
// //     return this
// //   },
// //   showStep: function() { // shows the current step
// //     console.log( this.step );
// //     return this
// //   }
// // };
// // ladder.up().up().down().showStep().down().showStep(); //
// //--------------------
// // function Calculator() {

// //   this.read= function(){
// //     this.a = +prompt("valor de a :")
// //     this.b = +prompt("valor de b : ")
// //   }

// //   this.sum = function () {
// //     return this.a + this.b
// //   }
// //   this.mul = function () {
// //     return this.a *  this.b
// //   }
// // }

// // let calculator = new Calculator();
// // calculator.read();

// // console.log( "Sum=" + calculator.sum() );
// // console.log( "Mul=" + calculator.mul() );
// //-----------------------
// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let response = prompt("¿Agregar un número? (si/no)");
//     if (response === "no") {
//       break;
//     } else if (response === "si") {
//       let input = prompt("Ingrese un número:");
//       let number = parseFloat(input); // Usar parseFloat para permitir decimales

//       if (!isNaN(number)) {
//         // Verificar si es un número válido
//         numbers.push(number);
//       } else {
//         alert("Entrada inválida. Ingrese un número válido.");
//       }
//     } else {
//       alert("Por favor ingrese 'si' o 'no'");
//     }
//   }
//   return numbers;
// }

// let inputNumbers = sumInput();
// console.log("Números ingresados:", inputNumbers);

// //Opcionalmente, sumar los numeros, si eso es lo que deseas.
// function sumArray(array) {
//   let sum = 0;
//   for (let number of array) {
//     sum += number;
//   }
//   return sum;
// }

// let sumOfNumbers = sumArray(inputNumbers);
// console.log("La suma de los numeros es:", sumOfNumbers);


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


// function aclean(arr){
//   let map = new Map();
//   for (const element of arr) {
//     let sorted = element.toLowerCase().split("").sort().join("");
//     map.set(sorted, element)
//     console.log(sorted);
//   }
//   for (const element of map) {
    
//     console.log(`mapa con duplicados ${element}`);
//   }
  
//   return  Array.from(map.values())
  
// }

// console.log(aclean(arr) );
//------DESSTRUCTTURAACION -----------
let user = {
  name: "John",
  years: 30
};

let {name, years : age, isAdmin =false} = user

console.log(age);

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function topSalaries(obj){
 let maxSalarie = 0 ;
let maxName = null ;

for (const [name, salarie] of Object.entries(obj)) {
  if(maxSalarie < salarie){
    maxName = name;
    maxSalarie = salarie
  }
  return maxName
}
 
};


console.log(topSalaries(salaries));