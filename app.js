const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname));

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});