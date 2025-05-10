import React, { useEffect, useState } from 'react';
import { obtenerProductos, eliminarProducto } from '../../api/productosApi';

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos().then(setProductos);
  }, []);

  const handleEliminar = (id) => {
    eliminarProducto(id).then(() => {
      setProductos(productos.filter((producto) => producto.id !== id));
    });
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio_venta}
            <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;
