import React, { useEffect, useState } from 'react';
import { obtenerMateriaPrima, eliminarMateriaPrima } from '../../api/materiaPrimaApi';

const ListaMateriaPrima = () => {
  const [materiasPrimas, setMateriasPrimas] = useState([]);

  useEffect(() => {
    obtenerMateriaPrima().then(setMateriasPrimas);
  }, []);

  const handleEliminar = (id) => {
    eliminarMateriaPrima(id).then(() => {
      setMateriasPrimas(materiasPrimas.filter((materia) => materia.id !== id));
    });
  };

  return (
    <div>
      <h2>Lista de Materia Prima</h2>
      <ul>
        {materiasPrimas.map((materia) => (
          <li key={materia.id}>
            {materia.nombre} - {materia.cantidad_unidad} unidades
            <button onClick={() => handleEliminar(materia.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaMateriaPrima;
