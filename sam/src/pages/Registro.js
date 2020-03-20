import React, { Component } from 'react'
import SignIn from '../components/SignIn/SignIn'
import LogIn from '../components/LogIn/LogIn'

class Registro extends Component {
    render() {
        return (
            <div >
                <SignIn />
                <LogIn />
            </div>
        )
    }
}

export default Registro
