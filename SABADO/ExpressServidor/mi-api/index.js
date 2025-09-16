const express = require("express");
const path = require('path');
const fs = require('fs');
const crypto = require("node:crypto")
const app = express();
const PORT = 3000;
// import { error } from "node:console";
const {validatorMovie, pactMovie} = require("./schemaMovie");
const { error } = require("node:console");


const moviesAll = path.join(__dirname,"movies.json")
let arrMovies = [];
//middelware para mwenjar solocitidu
app.use(express.json());
app.use(express.static("public"))


fs.readFile(moviesAll, (err, data)=>{
  if(err){
    console.log("error :", err);
  }
  console.log(data);
    arrMovies= JSON.parse(data)
    //console.log(arrMovies);
    
} )
app.disable('x-powered-by');

app.get("/", (req, res) => {
  res.send("¡Hola, mundo desde Express! hp");
  console.log("servidor corriendo");
});

app.get("/movies", (req, res) => {
  const { genre, year, director } = req.query; // Obtener los parámetros de consulta
  console.log(`Género: ${genre}, Año: ${year}, Director: ${director}`);

  let filteredMovies = arrMovies;

  // Filtrar por género
  if (genre) {
    console.log(Array.isArray(moviesAll)); // false -> ¡problema aquí!
console.log(Array.isArray(arrMovies)); // true -> este es el que deberías usar

    console.log(`filtrando por :${genre}`);
  //   const filteredMoviesGenre = arrMovies.filter(movie =>
  // movie.genre.includes(genre)
//);
  const filteredMovies= arrMovies.filter(
    movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
  )
   return res.json(filteredMovies)
  } 
  // Filtrar por año
  if (year) {
    console.log("Buscando por año");
    filteredMovies = filteredMovies.filter(movie => movie.year === parseInt(year, 10));
  }

  // Filtrar por director
  if (director) {
    console.log("Buscando por director");
    filteredMovies = filteredMovies.filter(movie =>
      movie.director.toLowerCase() === director.toLowerCase()
    );
  }

  // Enviar la respuesta con las películas filtradas
  if (filteredMovies.length > 0) {
    return res.json(filteredMovies);
  } else {
    return res.status(404).json({ message: "No se encontraron películas con los criterios especificados", code: 404 });
  }
});


app.get("/movies/:id",(req, res)=>{
  const id = req.params.id;
  const movie = arrMovies.find(movie =>movie.id === id);
  if(movie) return res.json({movie})
  res.status(404).json({massage: "recurso no encontrado", code: 404})
})

app.post("/movies",(req, res)=>{
 const result =  validatorMovie(req.body);

 if (result.error) {
  const msg =JSON.parse( result.error.message)
  return res.status(400).json({
    message : "error al crear la pelicula",
    error : msg,
    code : 400
  })
 }
 
   newMovie = {
    id: crypto.randomUUID(),
    ...result.data
  };
  console.log(newMovie);

  arrMovies.push(newMovie)
  console.log(arrMovies);

  res.status(201).json({
    message: "creadoa con exito",
    code : 201
  })
  
  
})

app.patch("/movies/:id", (req,res)=>{
  const id = req.params.id;

  const movieRepair = arrMovies.findIndex(movie=>movie.id === id);

  if(movieRepair === -1){
    console.log("error");
    res.status(404).json({
      massage : "pelicula no encontrada",
      code : 404
    })
  }

  const result = pactMovie(req.body);

  if(!result.success){
    return res.status(400).json({
      message : "Datos insalidos",
      error : result.error
    })
  }

  try {
    const updaeMovie = {
      ...arrMovies[movieRepair],
      ...result.data
    };

    arrMovies[movieRepair] = updaeMovie; 

    return res.status(201).json({
      message : "Pelicula Actualizada correctamente",
      movie : updaeMovie
  })
  } catch (error) {
    res.json(result.error)
  }
})




//error general para manejar solicutudes mal 
app.use((req, res)=>{
  res.status(404).send("<h1>error de solicitud</h1>")
  console.log({
    message: "error de solicitud",
    code: 404
  })
  });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
