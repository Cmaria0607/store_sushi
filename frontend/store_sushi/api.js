const API_URL = "http://127.0.0.1:5000";

// Obtener todos los productos
async function obtenerProductos() {
    const response = await fetch(`${API_URL}/productos`);
    return await response.json();
}

// Crear un producto
async function crearProducto(producto) {
    const response = await fetch(`${API_URL}/productos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    });
    return await response.json();
}

// Actualizar producto
async function actualizarProducto(id, datos) {
    const response = await fetch(`${API_URL}/productos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });
    return await response.json();
}

// Eliminar producto
async function eliminarProducto(id) {
    const response = await fetch(`${API_URL}/productos/${id}`, {
        method: 'DELETE'
    });
    return await response.json();
}

// Obtener todos los proveedores
async function obtenerProveedores() {
    const response = await fetch(`${API_URL}/proveedores`);
    return await response.json();
}

// Crear proveedor
async function crearProveedor(proveedor) {
    const response = await fetch(`${API_URL}/proveedores`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proveedor)
    });
    return await response.json();
}

// Actualizar proveedor
async function actualizarProveedor(id, datos) {
    const response = await fetch(`${API_URL}/proveedores/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });
    return await response.json();
}

// Eliminar proveedor
async function eliminarProveedor(id) {
    const response = await fetch(`${API_URL}/proveedores/${id}`, {
        method: 'DELETE'
    });
    return await response.json();
}

// Obtener materias primas
async function obtenerMateriaPrima() {
    const response = await fetch(`${API_URL}/materia_prima`);
    return await response.json();
}

// Crear materia prima
async function crearMateriaPrima(data) {
    const response = await fetch(`${API_URL}/materia_prima`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await response.json();
}

// Actualizar materia prima
async function actualizarMateriaPrima(id, datos) {
    const response = await fetch(`${API_URL}/materia_prima/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });
    return await response.json();
}

// Eliminar materia prima
async function eliminarMateriaPrima(id) {
    const response = await fetch(`${API_URL}/materia_prima/${id}`, {
        method: 'DELETE'
    });
    return await response.json();
}

// Obtener pedidos
async function obtenerPedidos() {
    const response = await fetch(`${API_URL}/pedidos`);
    return await response.json();
}

// Crear pedido
async function crearPedido(pedido) {
    const response = await fetch(`${API_URL}/pedidos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pedido)
    });
    return await response.json();
}

// Actualizar pedido
async function actualizarPedido(id, datos) {
    const response = await fetch(`${API_URL}/pedidos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });
    return await response.json();
}

// Eliminar pedido
async function eliminarPedido(id) {
    const response = await fetch(`${API_URL}/pedidos/${id}`, {
        method: 'DELETE'
    });
    return await response.json();
}

