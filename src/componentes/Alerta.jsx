const Alerta = ({ validacionExitosa, mensajeError }) => {
  return (
    <div>
      {validacionExitosa && (
        <div className="alert alert-success" role="alert">
          {validacionExitosa}
        </div>
      )}
      {mensajeError && (
        <div className="alert alert-danger" role="alert">
          {mensajeError}
        </div>
      )}
    </div>
  );
};

export default Alerta;
