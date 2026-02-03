// server.js
const express = require("express");
require("dotenv").config(); // opcional aquí, ya está en routes.js

const app = express();
const routes = require("./routes"); // 👈 esto debe ser un Router de Express

const PORT = 3000;

// ✅ así se usa un router de Express
app.use("/api", routes); // opcional: prefijo /api

// Ruta raíz
app.get("/", (req, res) => {
  res.send(
    "<h1>¡Hola desde Express!</h1><p>Este es un párrafo de mi HTML.</p>"
  );
  console.log("server is working");
});

app.listen(PORT, () => {
  console.log(`server running on: http://localhost:${PORT}`);
});
