import React, { Component } from 'react';
import { BoxLoginMk } from '../components/screen-login-mk/BoxLoginMk';
import { Navbar } from '../components/universal/Navbar';

class Login extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar />
                <BoxLoginMk />
            </>
        );
    }
}

export default Login;