const zod = require('zod');

const typesGenres = ["Action", "Adventure", "Fantasy", "Byography", "Drama", "Sci-fi", "Romance","Terror","Animation","Crime","Comedy"]

const schemaMovie = zod.object({
      title: zod.string({
        invalid_type_error : "title must be a string",
        required_error: "the field is required to continue"
    }),
    year: zod.number({
      invalid_type_error : "year must be a number ",
      required_error: "the field is required to continue"
    }).int().min(1900).max(2025, {message:"the year must not be older than 2025"}),
    director : zod.string({
      invalid_type_error: "director must be a string",
      required_error: "the field is required to continue"
    }),
    duration : zod.number().positive({
      message: "duration mest be positive"
    }),
    poster : zod.string().url({
      invalid_type_error : "The poster url must be a url finished in .jpg"
    }).refine((url)=> url.endsWith('.jpg'), {
      message : "The post url must be end with .jpg"
    } ),
    genre : zod.array(zod.enum(typesGenres, {error : `Genre must be one of this ${typesGenres.join(", ")}`})),
    rate : zod.number().min(0,{error :"Too low"}).max(10)
})

function validatorMovie (objtecMovie){
  return schemaMovie.safeParse(objtecMovie)
}

function pactMovie (object){
  return schemaMovie.partial().safeParse(object)
}

 module.exports = {
  validatorMovie, pactMovie
 }