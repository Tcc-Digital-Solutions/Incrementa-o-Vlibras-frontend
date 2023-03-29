import '../../assets/css/css_universal/Buttons_bar.css'
import { Link } from 'react-router-dom';
import { ButtonAcessibilidade } from './ButtonAcessibilidade';

import VLibras from '@djpfs/react-vlibras';
import { useEffect, useState } from 'react';

export const ButtonsBar = () => {
const [exibir,setExibir] = useState(false);

    

const sleep = ms => new Promise(r => setTimeout(r, ms));
    const teste = async() => {
        await sleep(2000)
        setExibir(true)
    }

    teste()




    return (
        <div className="buttons-bar-div" >
            <div className="buttons-bar-ilha">
                <span className="buttons-bar-ilha-button-acessibilidade"> <ButtonAcessibilidade /></span>
                <Link to={'/manual'} className="buttons-bar-click-link"><button className="buttons-bar-click" role="button">Manual</button></Link>
                <Link to={'/montagem'} className="buttons-bar-click-link"><button className="buttons-bar-click" role="button">Montagem</button></Link>
                <Link to={'/informacoes'} className="buttons-bar-click-link"><button className="buttons-bar-click" role="button">informações</button></Link>
            </div>
            {exibir? 
            <VLibras forceOnload={true}/>
            :null}
            
        </div>
    )
}