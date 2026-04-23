const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(__dirname));

// 📦 Base de datos temporal
let pedidos = [];

// 📥 Recibir pedido
app.post("/pedido", (req, res) => {
    const pedido = req.body;

    console.log("Pedido recibido:", pedido);

    pedidos.push(pedido);

    res.json({ mensaje: "Pedido guardado correctamente" });
});

// 👀 Ver pedidos
app.get("/pedidos", (req, res) => {
    res.json(pedidos);
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});