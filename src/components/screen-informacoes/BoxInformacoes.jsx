import '../../assets/css/css-informacoes/BoxInformacoes.css';
import { Img360 } from '../screen-informacoes/Img360';
import { Boxproduto } from './Boxproduto';
import { Carouselinformacoes } from './Carouselinformacoes';

export const BoxInformacoes = () => {
    return (

        <div className="container-informacoes">
            <div className="BoxInformacoes-div" >
                <Boxproduto/>
                <Img360/>
                <Carouselinformacoes/>
            </div>
        </div>
    )
}