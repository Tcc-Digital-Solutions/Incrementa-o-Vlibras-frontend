import '../../assets/css/css-crud/BoxEditProduto.css'
import lixeiraImg from '../../assets/img/🦆 icon _Trash_.png'
import editImg from '../../assets/img/🦆 icon _note pencil_.png'
import fecharImg from '../../assets/img/X.png'
import { useState } from 'react'

export const BoxEditProduto = (props) => {
    const [visible, setVisible] = useState("Box-edit-produto-div-button-clik-fechar")
    const [pressed, setPressed] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("Box-edit-produto-div-button-clik-fechar" )  : setVisible("Box-edit-produto-div-button-clik")
        setPressed(!pressed)
    }

    return (
        <div className="Box-edit-produto-div" >
            <span className="Box-edit-produto-span">
                <p className="Box-edit-produto-text">{props.produtoname}</p>
                <div className="Box-edit-produto-div-button">
                    <button className="Box-edit-produto-button" onClick={() => setMenuVisible()}><img src={editImg} alt="" /></button>
                    <button className="Box-edit-produto-button"><img src={lixeiraImg} alt="" /></button>
                </div>
            </span>
            <hr className="Box-edit-produto-hr-fake"/>
            <div className={visible}>
                <button className="Box-edit-produto-button" id='button-lado' onClick={() => setMenuVisible()}><img src={fecharImg} alt="" /></button>
                <p>{props.produtoname}</p>
            </div>
        </div>
    )
}