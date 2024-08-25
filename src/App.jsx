import React from "react";
import { useState } from "react";
import TarjetaPaciente from "./TarjetaPaciente";




function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [pacientes, setPacientes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //  Verifica si el handleSubmit se ejecuta
    console.log("Formulario enviado");

    if (nombre && edad && sintomas && fechaIngreso) {
      const nuevoPaciente = { nombre, edad, sintomas, fechaIngreso };
      
      //  Verificar el paciente que se está agregando
      console.log("Nuevo Paciente:", nuevoPaciente);

      // Agrega el nuevo paciente al estado
      setPacientes([...pacientes, nuevoPaciente]);

      // Limpiar los campos del formulario
      setNombre('');
      setEdad('');
      setSintomas('');
      setFechaIngreso('');

      // Verificar la lista actual de pacientes
      console.log("Pacientes actuales:", [...pacientes, nuevoPaciente]);
    } else {
      alert('Por favor complete todos los campos.');
    }
  };

  return (
    <div class="mx-auto w-full max-w-[550px] bg-white">
      <h1 className="text-3xl font-bold text-center mb-6">Gestión de Pacientes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del Paciente"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br></br>
        <input
          type="number"
          placeholder="Edad del Paciente"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <br></br>
        <textarea
          placeholder="Síntomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        /><br></br>
        <input
          type="date"
          value={fechaIngreso}
          onChange={(e) => setFechaIngreso(e.target.value)}
        /><br></br>
        <button type="submit">Agregar Paciente</button>
      </form>

      {/* Renderizado de las tarjetas de pacientes */}
      <div className="lista-pacientes">
        {pacientes.length > 0 ? (
          pacientes.map((paciente, index) => (
            <TarjetaPaciente key={index} {...paciente} />
          ))
        ) : (
          <p>Lista de Pacientes se encuentra vacia </p>
        )}
      </div>
    </div>
  );
}

export default App;