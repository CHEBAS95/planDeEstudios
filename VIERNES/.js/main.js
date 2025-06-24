// alert('hello bitvches')
//------ fisrt form
const requireInfo = document.forms["require_info"];

// document.addEventListener("keydown", ()=>{
//   console.log(event.key)
// })
const list = document.querySelector(".list_down");
console.log(list);

list.addEventListener("dblclick", () => {
  alert("hiciste doble click");
});

list.addEventListener("click", () => {
  alert(list);
});

function validation(formData, rules) {
  console.log("validador activo");
  let errors = {};

  for (const itemForm in rules) {
    if()
  }
}

requireInfo.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Validacion de datos Dudas...");
  
  const userData ={
    userName : requireInfo.elements["user_name"].value,
    userEmail : requireInfo.elements["user_email"].value,
    userMsg : requireInfo.elements["user_msg"].value,
  }
  for (const element in userData) {
    console.log(`${element}: ${userData[element]}`);
  };
  const userDataRules = {
    userName : {required : true, minLength : 3, },
    userEmail : {required : true, type : "email", },
    userMsg  : {required: true, minLength: 15, }
  }
  const errors = validation(userData, userDataRules);

  if(Object.keys(errors).length === 0){
    console.log("formulario de Infromacion requeridad Exitoso", );
    
  }else{
      console.log("formulario de Infromacion requeridad invalido", userData );
    
  }
});
