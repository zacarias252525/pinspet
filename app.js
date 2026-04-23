let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("carritoLista");
    lista.innerHTML = "";

    let total = 0;

    carrito.forEach(item => {
        total += item.precio;

        const li = document.createElement("li");
        li.textContent = item.nombre + " - " + item.precio + "€";
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

async function finalizarPedido() {
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;

    if (carrito.length === 0) {
        alert("Carrito vacío");
        return;
    }

    if (!nombre || !direccion) {
        alert("Completa tus datos");
        return;
    }

    const pedido = {
        cliente: {
            nombre,
            direccion
        },
        productos: carrito
    };

    await fetch("/pedidos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
    });

    alert("Pedido enviado");

    carrito = [];
    actualizarCarrito();

    document.getElementById("nombre").value = "";
    document.getElementById("direccion").value = "";
}