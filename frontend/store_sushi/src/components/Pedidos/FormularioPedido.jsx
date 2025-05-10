import React, { useState } from 'react';
import { crearPedido } from '../../api/pedidosApi';

const FormularioPedido = ({ onPedidoCreado }) => {
  const [cliente, setCliente] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPedido = {
      cliente,
      total: parseFloat(total),
    };

    crearPedido(nuevoPedido).then((pedido) => {
      onPedidoCreado(pedido);
      setCliente('');
      setTotal('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Pedido</h2>
      <input
        type="text"
        placeholder="Nombre del Cliente"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />
      <input
        type="number"
        placeholder="Total"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <button type="submit">Crear Pedido</button>
    </form>
  );
};

export default FormularioPedido;
