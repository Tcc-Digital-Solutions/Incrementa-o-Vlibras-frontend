import React, { Component } from 'react';
import { BoxInformacoes } from '../components/screen-informacoes/BoxInformacoes';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';

class Informaçoes extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar />
                <BoxInformacoes />
                <ButtonsBar />
            </>
        );
    }
}

export default Informaçoes;