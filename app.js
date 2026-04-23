// Obtener elementos
const form = document.getElementById("form-producto");
const lista = document.getElementById("lista-productos");

// Cargar productos al iniciar
async function cargarProductos() {
  const res = await fetch("/productos");
  const productos = await res.json();

  lista.innerHTML = "";

  productos.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - ${p.precio}€`;
    lista.appendChild(li);
  });
}

// Añadir producto
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;

  await fetch("/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, precio })
  });

  form.reset();
  cargarProductos();
});

// Cargar al inicio
cargarProductos();