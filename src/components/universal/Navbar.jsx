import '../../assets/css/css_universal/Navbar.css'
import imgTop from '../../assets/img/imgTopo.png'
import boschLogo from '../../assets/img/Bosch-logo.png'
import { Translate } from './Translate';
import { ButtonLogoff } from '../screen-crud/ButtonLogoff'
import { useState } from 'react'
import { Navbarsearch } from './Navbarsearch';

export const Navbar = (props) => {

    return (
        <div className="navbar-div" >
            <div className='navbar-div-1'>
                <img className='navbar-div-img-1' src={imgTop} alt="" />
            </div>
            <div className='navbar-div-2'>
                <span className='navbar-div-2-span'>
                    <img className='navbar-div-img-2' src={boschLogo} alt="" />
                    <span className={props.search ? 'navbar-div-button-logoff' : 'hide'}>
                            <Navbarsearch/>
                    </span>                    
                </span>
                <div  className={props.logado ? 'navbar-div-buttons' : 'navbar-div-buttons-2'}>
                    <span className={props.logado ? 'navbar-div-button-logoff' : 'hide'}>
                        <ButtonLogoff />
                    </span>
                    <Translate />
                </div>
            </div>

        </div>
    )
}