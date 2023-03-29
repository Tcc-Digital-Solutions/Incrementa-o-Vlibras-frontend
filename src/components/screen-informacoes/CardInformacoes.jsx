
import React, { Component } from 'react';
import '../../assets/css/css-informacoes/cardInformacoes.css';
import { FaLightbulb } from 'react-icons/fa';
import {BsBatteryCharging} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {TbCertificate} from 'react-icons/tb';
import imgbateria from '../../assets/img/img-bateria.png';
import imglampada from '../../assets/img/img-lampada.png';
import imgarantia from '../../assets/img/img-garantia.png';
import imgalerta from '../../assets/img/img-alerta.png';


function CardInformacoes({texto, icone}) {
    return ( 
        <>
        <div className='card-externo'>
            <div className='card-interno'>
    
                    <p className='card-texto'>{texto}</p>

                    <i className='img-icones'>
                    {
                         icone == 'bateria' ? <img src={imgbateria} /> : icone == 'lampada' ? <img src={imglampada} /> : icone == 'garantia' ? <img src={imgarantia}/> :  <img src={imgalerta}/>
                        

                    }
                    </i>
                    </div>               
            </div>
            
        </>
     );
}

export default CardInformacoes;