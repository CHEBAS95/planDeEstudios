const Router = require("express").Router;
const axios = require("axios"); // 👈 importar axios
const Dotenv = require("dotenv").config();

const API_KEY = process.env.API_KEY;

const router = Router();

// Endpoint de prueba
router.get("/main", (req, res) => {
  res.send("hola desde el enrutador");
  console.log(API_KEY);
});

// Endpoint para la imagen del día de NASA
router.get("/image", async (req, res) => {
  try {
    console.log("api_key: ", API_KEY);

    const response = await axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key: API_KEY, // 👈 aquí va tu API KEY
      },
    });

    console.log(response);
    // Devolver al frontend la info que trae NASA
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error al obtener datos de NASA:",
      error.response?.status.error.response?.data
    );
    res.status(500).json({ error: "No se pudo obtener la imagen del día" });
  }
});

module.exports = router;
