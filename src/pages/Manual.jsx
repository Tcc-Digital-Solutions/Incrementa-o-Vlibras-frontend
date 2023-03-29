import React, { Component } from 'react';
import { BoxManual } from '../components/screen-manual/BoxManual';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { ButtonYoutube } from '../components/universal/ButtonYoutube';
import { Navbar } from '../components/universal/Navbar';

class Manual extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar />
                <BoxManual/>
                <ButtonsBar />
                <ButtonYoutube />
            </>
        );
    }
}

export default Manual;