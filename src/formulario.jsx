import React, { createElement, useState } from "react";

function Formulario (){
    const [Nombredelpaciente,setNombre] = useState ()
    const [Edaddelpaciente,setEdad] = useState ()
    const [Sintomadelpaciente,setSintoma] = useState ()
    const [FechadeIngreso,setFecha] = useState ()
    function Agregarpaciente (){
        const AgregarNombre = () => {
            setnombre( NombredelPaciente)
        }
        
    }

   
    return(<>
        <div>
            <form action="">

                <h1>Agregar un Paciente </h1>

                <label htmlFor="">Nombre del Paciente:</label>
                <input type="text" /> <br /> <br />

                <label htmlFor="">Edad del Paciente:</label>
                <input type="number" /> <br /> <br />


                <label htmlFor="">Sintomas</label>
                <input type="text" />
                <br /> <br />

                <label htmlFor="">Fecha de ingreso</label>
                <input type="date" /> <br /> <br />

                <button type="submit">Enviar formulario</button>
            </form>
            
        </div>
       


            
       
        </>
    )
}
export default Formulario