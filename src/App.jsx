import React from 'react'
import { useState } from 'react'
import Formulario from './componentes/Formulario'
import './App.css'
import { BaseColaboradores } from './componentes/BaseColaboradores.js'
import TablaColaboradores from './componentes/TablaColaboradores.jsx'
import Alerta from './componentes/Alerta.jsx'
import Filtro from './componentes/filtro.jsx'


const App = () => {
  const [listInitColaboradores, setListInitColaboradores] = useState(BaseColaboradores);
  const [validacionExitosa, setValidacionExitosa] = useState();
  const [mensajeError, setMensajeError] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  // Función para recibir datos del formulario
  function recibirDatos(nuevoColaborador) {
    setListInitColaboradores((nuevaLista) => [...nuevaLista, nuevoColaborador]);
    console.log(nuevaLista);
  }

  // Función para recibir la validación exitosa
  function recibirValidacion(validacion) {
    if (!validacion) {
      setMensajeError('Por favor, completa todos los campos');
      setValidacionExitosa('');
      
    } else {
      setValidacionExitosa('Colaborador ingresado');
      setMensajeError(''); // Aquí se mantiene como cadena vacía
    }
  }


  function filtrarColaboradores(textoBusqueda) {
setSearchQuery(textoBusqueda)
  }
 
  const colaboradoresFiltrados = listInitColaboradores.filter(
    (colaborador) =>
      colaborador.nombre.includes(searchQuery) ||
      colaborador.correo.includes(searchQuery) ||
      colaborador.cargo.includes(searchQuery) ||
      String(colaborador.edad).includes(searchQuery) ||
      String(colaborador.telefono).includes(searchQuery)
  );

  return (
    <div className='padre_contenedor'>
      <div className="row">
        <div className="col-md-4">
          <Filtro filtrarColaboradores={filtrarColaboradores} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <TablaColaboradores capturaListaInicial={colaboradoresFiltrados} />
        </div>
        <div className="col-md-6">
          <Formulario agregarColaborador={recibirDatos} recibirValidacion={recibirValidacion} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <Alerta validacionExitosa={validacionExitosa} mensajeError={mensajeError} />
        </div>
      </div>
    </div>
  );
};

export default App;
