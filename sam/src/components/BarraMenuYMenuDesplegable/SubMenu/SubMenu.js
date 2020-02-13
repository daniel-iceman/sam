import React from 'react';
import './SubMenu.css';
import {Link} from 'react-router-dom'


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{width:"120px"}} > 
         <div className="buttonSM" onClick={this.showDropdownMenu}> Servicios </div>

          { this.state.displayMenu ? (
          <ul className='SubMenuUl'>
            <Link className='link' to='/sintomas' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} ><a className="active" href="/">Consulta Síntomas</a></li>
            </Link>
            <Link className='link' to='/laboratorios' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} ><a href="/">Consulta Laboratorios</a></li>
            </Link>
            <Link className='link' to='/consejos' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} ><a href="/">Consejos para tu salud</a></li>
            </Link>
            <Link className='link' to='/medicos' >
            <li style = {{borderBottom:" 1px solid #e5e5e5"}} ><a href="/">Consulta un Médico</a></li>
            </Link>
            <Link className='link' to='/ajustes' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} ><a href="/">Ajustes</a></li>
            </Link>
            <li><a href="#Salir">Salir</a></li>
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

export default Dropdown;