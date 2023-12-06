import React from "react";
import Table from "react-bootstrap/Table";
function TablaColaboradores({ capturaListaInicial }) {
  console.log(capturaListaInicial);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {capturaListaInicial.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TablaColaboradores;


     
 
