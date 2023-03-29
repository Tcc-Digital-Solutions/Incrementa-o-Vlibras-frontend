import React, { Component } from 'react';
import { Carousel } from '../components/screen-home/Carousel';
import { NavbarHome } from '../components/screen-home/NavbarHome';
import { Navbar } from '../components/universal/Navbar';


class Home extends Component {
    state = {}
    render() {
        return (
            <>
            <Navbar search='false' />
            <div className='home-center'>
                <span className='home-center-item'>
                    <NavbarHome/>
                    <Carousel/>                      
                </span>
            </div>

            </>
        );
    }
}

export default Home;