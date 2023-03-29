import '../../assets/css/css_universal/ButtonYoutube.css'
import fecharImg from '../../assets/img/X.png'
import { useState } from 'react'
import { BoxYoutube } from './BoxYoutube'

export const ButtonYoutube = () => {
    const [visible, setVisible] = useState("button-youtube-box-fechar")
    const [pressed, setPressed] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("button-youtube-box-fechar") : setVisible("button-youtube-box")
        setPressed(!pressed)
    }

    return (
        <div className="button-youtube-div" >
            <button className='button-youtube-button' onClick={() => setMenuVisible()}>Bosch Youtube</button>
            <span className={visible}>
                <button className="button-youtube-button-x" id='button-lado' onClick={() => setMenuVisible()}><img className="button-youtube-button-x-img" src={fecharImg} alt="" /></button>
                <div className="button-youtube-button-scroll">
                    <BoxYoutube youtube='Bptf9MTqsAU' />
                    <BoxYoutube youtube='287OmjWqVYM' />
                    <BoxYoutube youtube='qZ83KN1G_2c' />
                    <BoxYoutube youtube='MEtQy4c9SoE' />
                    <BoxYoutube youtube='idb7N4DQO8w' />
                    <BoxYoutube youtube='idb7N4DQO8w' />
                    <BoxYoutube youtube='idb7N4DQO8w' />
                    <BoxYoutube youtube='idb7N4DQO8w' />
                    <BoxYoutube youtube='idb7N4DQO8w' />
                    <BoxYoutube youtube='idb7N4DQO8w' />
                </div>
            </span>
        </div>
    )
}
