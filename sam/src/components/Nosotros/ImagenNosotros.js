import React, { Component } from 'react'
import medico from '../images/bata_blanca.jpg'
import './Nosotros.css'

class ImagenNosotros extends Component {
    render() {
        return (
            <div>
                <div className="coverHome"
                    style = {{
                        backgroundImage: `url(${medico})`,
                    }}>
                    <div className="overlayHome"></div> 
                </div>
                        

                
            </div>
        )
    }
}

export default ImagenNosotros
