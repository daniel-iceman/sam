import React from 'react';
import './SignIn.css'


function SignIn () {    

    return (
        <div className='signIn-container'>
            <div className='imageBackground'> </div>
                {/*<div className='move-cover'>
                    <button type='button'  >cambiar</button>

                </div>*/}
            <div className='form-container'>

                <div className='seccion-Registro' >
                    <div>
                        <h1>
                            Crear una Cuenta
                        </h1>
                    </div>
                    <form  method='get' id='form-datos-generales' >                
                        <div className='fila-1' >
                            <div>
                                <input type='text' placeholder='Nombre'  ></input>
                            </div>
                            <div>
                                <input type='text' placeholder='Apellido Paterno' ></input>
                            </div>
                            <div>
                                <input type='text' placeholder='Apellido Materno' ></input>
                            </div>
                        </div>

                        <div className='fila-2'>
                            <div className='fecha-nacimiento-Posicion' >
                                <div>
                                    <p>Fecha de Nacimiento</p>
                                </div>
                                <div className='dia-mes-año-Posicion'>
                                    <div>
                                        <select name='Day' required>
                                            <option value='' disabled selected > Día </option>
                                            <option value='1' > 1 </option>
                                            <option value='2' > 2 </option>
                                            <option value='3' > 3 </option>
                                            <option value='4' > 4 </option>
                                        </select>
                                    </div>
                                    <div>
                                        <select name='Month' required>
                                        <option value='' disabled selected > Mes </option>
                                            <option value='1' > Enero </option>
                                            <option value='2' > Febrero </option>
                                            <option value='3' > Marzo </option>
                                            <option value='4' > Abril </option>
                                        </select>
                                    </div>
                                    <div>
                                        <select name='Year' required>
                                            <option value='' disabled selected > Año </option>
                                            <option value='2002' > 2002 </option>
                                            <option value='2001' > 2001 </option>
                                            <option value='2000' > 2000 </option>
                                            <option value='1999' > 1999 </option>
                                        </select>
                                    </div>
                                </div>   
                            </div>
                        </div> 
                        <div className='fila-3'> 
                            <div className='sexo' >
                                <select name='Sex' required>
                                    <option value='' disabled selected > Sexo </option>
                                    <option value='0' >Masculino </option>
                                    <option value='1' >Femenino </option>
                                </select>
                            </div>

                            <div className='genero' >
                                <select name='Gender' required>
                                    <option value='' disabled selected > Género </option>
                                    <option>Homosexual</option>
                                    <option>Lesbiana</option>
                                </select>
                            </div>                    
                        </div>                   
                    
                        <div className='fila-4' >
                            <div className='email' >
                                <input type='email' placeholder='Email' ></input>
                            </div>
                            <div>
                                <input type='password' placeholder='Contraseña' ></input>
                            </div>
                            <div>
                                <input type='password' placeholder='Confirmar contraseña' ></input>
                            </div>
                        </div>

                        <div className='fila-5' >
                            <div className='btn-enviar'>
                                <button type="submit" form="form-datos-generales" value="Submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>   

                {/* Sección de ingreso */}
                <div className='seccion-Ingreso' >
                    <div>
                        <h1>
                            Ingresar
                        </h1>
                    </div>
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
        </div>
    )


}

                

export default SignIn