import React, { useState } from 'react';

const Filtro = ({filtrarColaboradores}) => {
  const [textoBusqueda, setTextoBusqueda] = useState('');

  function envioDataFiltro(event) {
    event.preventDefault(); 
    filtrarColaboradores(textoBusqueda);
  }

  function captura_cambio(e) {
    const valor_input = e.target.value;
    setTextoBusqueda(valor_input); 
  }

  return (
    <form onSubmit={envioDataFiltro}>
      <input
        type="text"
        name="busqueda"
        onChange={captura_cambio}
        placeholder="Buscar colaborador..."
      />
    
      <button type="submit" className='btn-primary'>Buscar</button>
    </form>
  );
};

export default Filtro;