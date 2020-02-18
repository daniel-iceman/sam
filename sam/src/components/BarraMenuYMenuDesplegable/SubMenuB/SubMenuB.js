import React from 'react';
import './SubMenuB.css';
import {Link} from 'react-router-dom'


class DropdownPerfil extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenuPerfil: false,
     };

  this.showDropdownMenuPerfil = this.showDropdownMenuPerfil.bind(this);
  this.hideDropdownMenuPerfil = this.hideDropdownMenuPerfil.bind(this);

};

showDropdownMenuPerfil(event) {
    event.preventDefault();
    this.setState({ displayMenuPerfil: true }, () => {
    document.addEventListener('click', this.hideDropdownMenuPerfil);
    });
  }

  hideDropdownMenuPerfil() {
    this.setState({ displayMenuPerfil: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenuPerfil);
    });

  }

  render() {
    return (
        <div  className="dropdownPerfil" style = {{width:"80px"}} > 
         <div className="buttonSMPerfil" onClick={this.showDropdownMenuPerfil} >Perfil </div>

          { this.state.displayMenuPerfil ? (
          <ul className='SubMenuUlPerfil'>
            <Link className='link' to='/signin' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Iniciar Sesión</li>
            </Link>
            <Link className='link' to='/registro' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Registro</li>
            </Link>
            <Link className='link' to='/mihistorial' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Mi Historial</li>
            </Link>
            
            <li>Salir</li>
          </ul>
        ):
        (
          null
        )
        }

       </div>
         

    );
  }
}

export default DropdownPerfil;