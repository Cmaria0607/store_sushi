import React, { useEffect, useState } from 'react';
import { obtenerProveedores, eliminarProveedor } from '../../api/proveedoresApi';

const ListaProveedores = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    obtenerProveedores().then(setProveedores);
  }, []);

  const handleEliminar = (id) => {
    eliminarProveedor(id).then(() => {
      setProveedores(proveedores.filter((proveedor) => proveedor.id !== id));
    });
  };

  return (
    <div>
      <h2>Lista de Proveedores</h2>
      <ul>
        {proveedores.map((proveedor) => (
          <li key={proveedor.id}>
            {proveedor.nombre} - {proveedor.contacto}
            <button onClick={() => handleEliminar(proveedor.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProveedores;
