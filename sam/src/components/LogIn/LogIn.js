import React from 'react';
import './LogIn.css'

function LogIn (){

    
    return (
        
        <div>
            <div className='seccion-Ingreso' >
                <h1>
                    Ingresar
                </h1>
                
                <form className='Ingresar-cuenta' method='get' id='form-ingreso' >
                    <div>
                        <input type='email' placeholder='Email'  ></input>
                    </div>
                    <div>
                        <input type='password' placeholder='Contraseña' ></input>
                    </div>
                    <div className='btn-olvido-password'>
                        <button type="submit" value="olvido-contraseña">¿Olvidaste contraseña?</button>
                    </div>
                    <div className='btn-enviar'>
                        <button type="submit" form="form-datos-generales" value="Submit">Ingresar</button>
                    </div>                      
                </form>

                
                
            </div>
        </div>

    )
}

export default LogIn