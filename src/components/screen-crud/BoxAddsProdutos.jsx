import '../../assets/css/css-crud/BoxAddsProdutos.css'
import { BoxManualCadastrados } from './BoxManualCadastrados'
import { BoxPesquisaCrud } from './BoxPesquisaCrud'

export const BoxAddsProdutos = () => {
    return (
        <div className="box-adds-produtos-div" >
            <BoxPesquisaCrud/>
            <BoxManualCadastrados/>
        </div>
    )
}