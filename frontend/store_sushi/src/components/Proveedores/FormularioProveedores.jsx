import React, { useState } from 'react';
import { crearProveedor } from '../../api/proveedoresApi';

const FormularioProveedor = ({ onProveedorCreado }) => {
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');
  const [material, setMaterial] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProveedor = {
      nombre,
      contacto,
      material,
    };
    crearProveedor(nuevoProveedor).then((proveedor) => {
      onProveedorCreado(proveedor);
      setNombre('');
      setContacto('');
      setMaterial('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Proveedor</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contacto"
        value={contacto}
        onChange={(e) => setContacto(e.target.value)}
      />
      <input
        type="text"
        placeholder="Material"
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
      />
      <button type="submit">Crear</button>
    </form>
  );
};

export default FormularioProveedor;
