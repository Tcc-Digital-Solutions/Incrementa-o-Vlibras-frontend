import '../../assets/css/css-crud/BoxManualCadastrados.css'
import vectorImg from '../../assets/img/Vector.png'
import { BoxEditProduto } from './BoxEditProduto'
import { useState } from 'react'
import fecharImg from '../../assets/img/X.png'



export const BoxManualCadastrados = () => {
    const [visible, setVisible] = useState("box-manual-cadastrados-menu-fechar")
    const [pressed, setPressed] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("box-manual-cadastrados-menu-fechar") : setVisible("box-manual-cadastrados-menu")
        setPressed(!pressed)
    }

    return (
        <div className="box-manual-cadastrados-div" >
            <span className="box-manual-cadastrados-span">
                <button className="box-manual-cadastrados-button" onClick={() => setMenuVisible()}><img src={vectorImg} alt="" /></button>
            </span>
            <div className="box-manual-cadastrados-scrool-span">
                <BoxEditProduto produtoname='Furadeira' />
                <BoxEditProduto produtoname='Esmerilhadeira Angular' />
                <BoxEditProduto produtoname='Parafusadeira' />
                <BoxEditProduto produtoname='Martelete' />
                <BoxEditProduto produtoname='Furadeira' />
                <BoxEditProduto produtoname='Esmerilhadeira Angular' />
                <BoxEditProduto produtoname='Parafusadeira' />
                <BoxEditProduto produtoname='Martelete' />
                <BoxEditProduto produtoname='Furadeira' />
                <BoxEditProduto produtoname='Esmerilhadeira Angular' />
                <BoxEditProduto produtoname='Parafusadeira' />
                <BoxEditProduto produtoname='Martelete' />
                <BoxEditProduto produtoname='Furadeira' />
                <BoxEditProduto produtoname='Esmerilhadeira Angular' />
                <BoxEditProduto produtoname='Parafusadeira' />
                <BoxEditProduto produtoname='Martelete' />
            </div>
            <div className={visible}>
                <button className="box-manual-cadastrados-button" id='button-lado' onClick={() => setMenuVisible()}><img src={fecharImg} alt="" /></button>
            </div>
        </div>
    )
}