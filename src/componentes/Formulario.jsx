import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hojas-estilo/formulario.css";

const Formulario = ({ agregarColaborador, recibirValidacion }) => {
  const [form, setForm] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const gestionEnvio = (e) => {
    e.preventDefault();

    const nuevoColaborador = {
      nombre: e.target.nombre.value,
      correo: e.target.correo.value,
      edad: e.target.edad.value,
      cargo: e.target.cargo.value,
      telefono: e.target.telefono.value,
    };
    //console.log(nuevoColaborador);
    //agregarColaborador(nuevoColaborador);
    const camposValidados = validarCampos(nuevoColaborador);

    if (!camposValidados) {
      //alert('Por favor, completa todos los campos.');
      recibirValidacion(false);
    } else {
      recibirValidacion(true);
      agregarColaborador(nuevoColaborador);
      //setValidacionExitosa(true);

      setForm({
        id: "",
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    }
  };

  const validarCampos = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre === "" ||
      nuevoColaborador.correo === "" ||
      nuevoColaborador.edad === "" ||
      nuevoColaborador.cargo === "" ||
      nuevoColaborador.telefono === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  function captura_cambio(e) {
    const campo_input = e.target.name;
    const valor_input = e.target.value;
    console.log(campo_input, valor_input);
  }

  return (
    <>
      <form className="formulario" onSubmit={gestionEnvio}>
        <h5>Agregar Colaborador</h5>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            className="w-100"
            onChange={captura_cambio}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Correo"
            name="correo"
            className="w-100"
            onChange={captura_cambio}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Edad"
            name="edad"
            className="w-100"
            min="1"
            max="120"
            onChange={captura_cambio}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Cargo"
            name="cargo"
            className="w-100"
            onChange={captura_cambio}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Teléfono"
            name="telefono"
            className="w-100"
            pattern="[0-9]{10}"
            onChange={captura_cambio}
          />
        </div>
        <button type="submit" value="Enviar" className="btn-primary">
          Agregar Colaborador
        </button>
      </form>
    </>
  );
};

export default Formulario;
