import React, { Component } from 'react'
import ImagenNosotros from './ImagenNosotros'
import './Nosotros.css'

class Nosotros extends Component {
    render() {
        return (
            <div>
               <ImagenNosotros />
                
               
                <div className='textoNosotros' >
                    
                    <h1>La Ciencia y la Tecnología aplicada para tí</h1>
                    <p>S.A.M. (Soporte Artificial Médico) es una aplicación 
                        médica cuyo algoritmo fué creado por el doctor Díaz con más 
                        de 20 años de experiencia en el campo de la médicina quien
                        incursionó tiempo después en el area de la programación y
                        estudios en inteligencia artificial. </p>
                    <p>S.A.M tiene un robusto soporte basado en publicaciones
                        cientificas y experiencia profesional y cuenta con el apoyo
                        de médicos especialistas que cubran las necesidades de los
                        usuarios.
                    </p>
                </div>
                
            </div>
        )
    }
}

export default Nosotros
