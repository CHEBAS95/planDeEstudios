const listaPokemon = document.querySelector("#listaPokemon");
const botoneHeader = document.querySelectorAll(".btn-header")
const URL  = "https://pokeapi.co/api/v2/pokemon/";
console.log(botoneHeader);

for(i =1 ; i <= 151 ; i++){
console.log('Iniciando fetch...');
fetch(URL + i)
    .then((response) => {
        // console.log('Respuesta recibida:', response);
        return response.json();
    })
    .then((data) => {
        // console.log('Datos convertidos a JSON:', data);
        mostrarPokemon(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}

function mostrarPokemon(poke){
   
    let tipos =  poke.types.map((type)=>{
       return `<p class="${type.type.name}">${type.type.name}</p>`
    })
    let id = poke.id.toString()
    if(id.length === 1){
        id = "00"+id
    }else if (id.length === 2){
        id = "0"+id
    }else {
        id = id 
    }
    // console.log(tipos.join(' '));

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML=`
    <p class="pokemon-id-back">#${id}</p>
                    <div class="pokemon-image">
                        <img src="${poke.sprites.front_default}" alt="">
                    </div>
                    <div class="pokemon-info">
                        <div class="nombre" class="nombre-contenedor">
                            <p class="pokemon-class">#${id}</p>
                            <h2 class="pokemon-name">${poke.name}</h2>
                        </div>
                        <div class="pokemon-tipos">
                            ${tipos}
                        </div>
                        <div class="pokemon-stats">
                            <div class="stat">${poke.height}cm</div>
                            <div class="stat">${poke.weight} kg</div>
                        </div>
                    </div>`;

    listaPokemon.append(div);
}
botoneHeader.forEach(boton => boton.addEventListener("click",()=>{
   const botones = event.currentTarget.id ;
   console.log(botones);
   for(i =1 ; i <= 151 ; i++){
    console.log('Iniciando fetch...');
    fetch(URL + i)
        .then((response) => {
            // console.log('Respuesta recibida:', response);
            return response.json();
        })
        .then((data) => {
            // console.log('Datos convertidos a JSON:', data);
            mostrarPokemon(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    
    }
}))