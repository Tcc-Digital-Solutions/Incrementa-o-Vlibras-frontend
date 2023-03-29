import '../../assets/css/css_universal/ButtonAcessibilidade.css'
import Acessibilidade from '../../assets/img/acessibilidade.png'
import { useState } from 'react'

export const ButtonAcessibilidade = () => {

    const [visible10, setVisible10] = useState("button-acessibilidade-box-fechar")
    const [pressed10, setPressed10] = useState(false)

    const setMenuVisible10 = () => {
        pressed10 ? setVisible10("button-acessibilidade-box-fechar") : setVisible10("button-acessibilidade-box")
        setPressed10(!pressed10)
    }

    return (
        <div className="button-acessibilidade-div" >
            <button className="button-acessibilidade-button" onClick={() => setMenuVisible10()} onBlur={() => setMenuVisible10("button-acessibilidade-box-fechar")}><img className='button-acessibilidade-img' src={Acessibilidade} alt="" /></button>
            <span className={visible10}>
                <span className="button-acessibilidade-text">Acessibilidades</span>
                <span className="button-acessibilidade-button-div">
                    <button className="button-acessibilidade-button-active">Leitor de texto</button>
                    <button className="button-acessibilidade-button-active">Alto contraste</button>
                </span>

            </span>
        </div>
    )
}