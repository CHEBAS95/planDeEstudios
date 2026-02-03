// routes.js
const express = require("express");
const axios = require("axios");
require("dotenv").config();

const startDate = '1995-10-18';
const endDate = "1995-10-25";
const API_KEY = process.env.API_KEY;

const router = express.Router(); // 👈 Router de Express, no otro "router"

// Endpoint de prueba
router.get("/main", (req, res) => {
  res.send("hola desde el enrutador");
  console.log("API_KEY:", API_KEY);
});

// Endpoint para la imagen del día de NASA
router.get("/image", async (req, res) => {
  try {
    console.log("API_KEY:", API_KEY);

    const response = await axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key: API_KEY,
      },
    });

    console.log("NASA response:", response.status, response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error al obtener datos de NASA:", error);
    res.status(500).json({
      error: "No se pudo obtener la imagen del día",
      details: error.message,
    });
  }
});

router.get("/neoWs", async(req, res)=>{
  try {
    const response = await axios.get("https://api.nasa.gov/neo/rest/v1/feed",{
      params:{
        start_date: startDate,
        end_date : endDate,
        api_key : API_KEY,
      }
    })
    console.log("nasa responde : ", res.data);
    res.json(response.data)
    

  } catch (error) {
    console.error("error en la servidor")
  }
});

router.get("/marsInfo", async(req, res)=>{
  try {
    const response = await axios.get("https://api.nasa.gov/insight_weather/",{
      params:{
        api_key : API_KEY,
        feedType : "json",
        ver : 1.0,
      }
    })
    console.log("nasa responde : ", res.data);
    res.json(response.data)
    

  } catch (error) {
    console.error("error en la servidor")
  }
});


module.exports = router; // ✅ exportar el router de Express
