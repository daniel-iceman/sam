import React, { Component } from 'react'
import medico from '../images/Doctor_developer.PNG'
import './Nosotros.css'

class ImagenNosotros extends Component {
    render() {
        return (
            <div>
                <div className="coverUs"
                    style = {{
                        backgroundImage: `url(${medico})`,
                    }}>
                    <div className="overlayUs"></div> 
                </div>
                        

                
            </div>
        )
    }
}

export default ImagenNosotros
