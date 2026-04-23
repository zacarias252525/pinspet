const botones = document.querySelectorAll(".producto button");

let carrito = [];
let total = 0;

botones.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    const producto = index === 0 
      ? { nombre: "Pienso Premium", precio: 15 }
      : { nombre: "Snack", precio: 5 };

    carrito.push(producto);
    total += producto.precio;

    actualizarCarrito();
  });
});

function actualizarCarrito() {
  document.querySelector(".carrito").innerHTML = `
    <h2>🛒 Carrito</h2>
    <p>Total: ${total} €</p>
  `;
}