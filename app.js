const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());
app.use(express.static(".")); // sirve index.html

// Base de datos en memoria
let productos = [];

// GET productos
app.get("/productos", (req, res) => {
  res.json(productos);
});

// POST producto
app.post("/productos", (req, res) => {
  const { nombre, precio } = req.body;

  if (!nombre || !precio) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  productos.push({ nombre, precio });
  res.json({ ok: true });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
