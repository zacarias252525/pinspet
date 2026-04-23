let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function eliminarProducto(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("carritoLista");
    const totalSpan = document.getElementById("total");

    lista.innerHTML = "";

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${producto.nombre} - ${producto.precio}€
            <button onclick="eliminarProducto(${index})">❌</button>
        `;

        lista.appendChild(li);
    });

    totalSpan.textContent = total;
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}
function finalizarPedido() {
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;

    if (!nombre || !direccion) {
        alert("Por favor completa tus datos");
        return;
    }

    const pedido = {
        cliente: { nombre, direccion },
        productos: carrito,
        total: total
    };

    fetch("/pedido", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
    })
    .then(res => res.json())
    .then(data => {
        alert("Pedido enviado correctamente ✅");
        vaciarCarrito();
    })
    .catch(err => {
        alert("Error al enviar pedido ❌");
        console.error(err);
    });
}
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;

    if (!nombre || !direccion) {
        alert("Por favor completa tus datos");
        return;
    }

    alert(`Pedido realizado por ${nombre}. Total: ${total}€`);

    vaciarCarrito();
}