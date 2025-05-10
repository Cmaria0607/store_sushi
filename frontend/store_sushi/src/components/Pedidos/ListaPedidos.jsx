import React, { useEffect, useState } from 'react';
import { obtenerPedidos, eliminarPedido } from '../../api/pedidosApi';

const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    obtenerPedidos().then(setPedidos);
  }, []);

  const handleEliminar = (id) => {
    eliminarPedido(id).then(() => {
      setPedidos(pedidos.filter((pedido) => pedido.id !== id));
    });
  };

  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            Pedido #{pedido.id} - Total: ${pedido.total}
            <button onClick={() => handleEliminar(pedido.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPedidos;
