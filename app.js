const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(".")); 

let pedidos = [];

// Crear pedido
app.post("/pedido", (req, res) => {
  pedidos.push(req.body);
  console.log("Nuevo pedido:", req.body);
  res.send({ ok: true });
});

// Obtener pedidos
app.get("/pedidos", (req, res) => {
  res.send(pedidos);
});

// Borrar pedidos
app.delete("/pedidos", (req, res) => {
  pedidos = [];
  res.send({ ok: true });
});

// 🔥 IMPORTANTE PARA RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});