// BOTONES "AÑADIR"
const botones = document.querySelectorAll(".producto button");

// LISTA DE PRODUCTOS (desde servidor)
let carrito = [];

// AÑADIR PRODUCTO AL SERVIDOR
botones.forEach(boton => {
  boton.addEventListener("click", async () => {
    const producto = boton.parentElement;
    const nombre = producto.querySelector("h3").textContent;
    const precio = producto.querySelector("p").textContent.replace("€", "");

    await fetch("/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nombre, precio })
    });

    alert("Producto añadido correctamente");
  });
});