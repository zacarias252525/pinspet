const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(__dirname));

// 🔥 Aquí guardamos pedidos (temporal)
let pedidos = [];

// 📦 Ruta para recibir pedidos
app.post("/pedido", (req, res) => {
    const pedido = req.body;

    console.log("Pedido recibido:", pedido);

    pedidos.push(pedido);

    res.json({ mensaje: "Pedido guardado correctamente" });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});