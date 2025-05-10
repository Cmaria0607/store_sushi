import React, { useState } from 'react';
import { crearProducto } from '../../api/productosApi';

const FormularioProducto = ({ onProductoCreado }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precioVenta, setPrecioVenta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = {
      nombre,
      descripcion,
      precio_venta: parseFloat(precioVenta),
    };
    crearProducto(nuevoProducto).then((producto) => {
      onProductoCreado(producto);
      setNombre('');
      setDescripcion('');
      setPrecioVenta('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Producto</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio de Venta"
        value={precioVenta}
        onChange={(e) => setPrecioVenta(e.target.value)}
      />
      <button type="submit">Crear</button>
    </form>
  );
};

export default FormularioProducto;
