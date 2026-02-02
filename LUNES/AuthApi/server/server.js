const express = require("express");

const app = express();
const routes = require("./routes");

const PORT = 3000;

app.use(routes);

app.get("/", (req, res) => {
  res.send(
    "<h1>¡Hola desde Express!</h1><p>Este es un párrafo de mi HTML.</p>"
  );
  console.log("server is working");
});

app.listen(PORT, () => {
  console.log(`server running on:) : http://localhost:${PORT}`);
});
