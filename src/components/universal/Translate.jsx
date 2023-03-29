import '../../assets/css/css_universal/Translate.css'
import '../../assets/css/css_universal/dropdown.css'
import translateImg from '../../assets/img/translate.png'
import { useState } from 'react'

export const Translate = () => {
    const [visible, setVisible] = useState("translate-box-fechar")
    const [pressed, setPressed] = useState(false)
    // const userLocale = navigator?.languages?.length ? navigator.languages[0] : navigator.language;
    // console.log(userLocale);
    // console.log(navigator.languages);



    const setMenuVisible = () => {
        pressed ? setVisible("translate-box-fechar") : setVisible("translate-box")
        setPressed(!pressed)
    }


    const puxarIdioma = (idioma) => {
        // window.location.reload(false);
        console.log(idioma);
    }
    return (
        <div className="translate-div">
            <button className='translate-button' id='danilo' onClick={() => setMenuVisible()} onBlur={() => setMenuVisible("translate-box-fechar")}><img src={translateImg} alt="" className='translateimg' /></button>
            <span className={visible}>
                <span className="translate-button-text">Languages</span>
                <span className="translate-buttons">
                    <button className="translate-button-active " >Português</button>
                    <button className="translate-button-active">English</button>
                    <button className="translate-button-active">Español</button>
                    <button className="translate-button-active">German</button>
                    <button className="translate-button-active">Français</button>
                </span>
            </span>
        </div>
    )
}