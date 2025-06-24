const mongoose = require("mongoose");

async function main() {
  try {
    // Conectar a la base de datos
    await mongoose.connect("mongodb://127.0.0.1:27017/notes-db");

    console.log("Conexión a MongoDB establecida correctamente.");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
  }
}

// Llamar a la función principal
main();
