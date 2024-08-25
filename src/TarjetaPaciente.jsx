import React from 'react';
//esta es la tarjeta de paciente que recive los props de el componente raiz 
function TarjetaPaciente({ nombre, edad, sintomas, fechaIngreso }) {
  return (
    <div className="tarjeta-paciente">
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
      <p>Síntomas: {sintomas}</p>
      <p>Fecha de Ingreso: {fechaIngreso}</p>
    </div>
  );
}

export default TarjetaPaciente;