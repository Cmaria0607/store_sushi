import React, { useState } from 'react';
import { crearMateriaPrima } from '../../api/materiaPrimaApi';

const FormularioMateriaPrima = ({ onMateriaCreada }) => {
  const [nombre, setNombre] = useState('');
  const [cantidadUnidad, setCantidadUnidad] = useState('');
  const [cantidadGramos, setCantidadGramos] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [costo, setCosto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaMateria = {
      nombre,
      cantidad_unidad: parseFloat(cantidadUnidad),
      cantidad_gramos: parseFloat(cantidadGramos),
      fecha_vencimiento: fechaVencimiento,
      costo: parseFloat(costo),
    };
    crearMateriaPrima(nuevaMateria).then((materia) => {
      onMateriaCreada(materia);
      setNombre('');
      setCantidadUnidad('');
      setCantidadGramos('');
      setFechaVencimiento('');
      setCosto('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Materia Prima</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad por Unidad"
        value={cantidadUnidad}
        onChange={(e) => setCantidadUnidad(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad en Gramos"
        value={cantidadGramos}
        onChange={(e) => setCantidadGramos(e.target.value)}
      />
      <input
        type="date"
        placeholder="Fecha de Vencimiento"
        value={fechaVencimiento}
        onChange={(e) => setFechaVencimiento(e.target.value)}
      />
      <input
        type="number"
        placeholder="Costo"
        value={costo}
        onChange={(e) => setCosto(e.target.value)}
      />
      <button type="submit">Crear</button>
    </form>
  );
};

export default FormularioMateriaPrima;
