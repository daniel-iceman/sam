import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Menu from './components/BarraMenuYMenuDesplegable/Menu/Menu'
import Home from './pages/Home'
import Registro from './pages/Registro'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Ajustes from './pages/Ajustes'
import Sintomas from './pages/ConsultaSintomas'
import Laboratorios from './pages/ConsultaLaboratorios'
import Consejos from './pages/Consejos'
import Medicos from './pages/Medicos'



class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Menu />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/registro" component={Registro} />
                        <Route exact path="/nosotros" component={Nosotros} />
                        <Route exact path="/contacto" component={Contacto} />
                        <Route exact path="/ajustes" component={Ajustes} />
                        <Route exact path="/sintomas" component={Sintomas} />
                        <Route exact path="/laboratorios" component={Laboratorios} />
                        <Route exact path="/consejos" component={Consejos} />
                        <Route exact path="/medicos" component={Medicos} />
                    </Switch>
   
                </div>
            </Router>

        )
    }
}

export default App
                   
                    

