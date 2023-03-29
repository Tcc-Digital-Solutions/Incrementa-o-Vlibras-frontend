import '../../assets/css/css-home/Cardproduto.css'
import ferramenta from '../../assets/img/f12-chave-menu.png'


export const Cardproduto = (props) => {
    return (
        <div className="Cardproduto-div" >
            <span className='Cardproduto-div-01'>
            </span>
            <span className='Cardproduto-div-02'>
                <img src={ferramenta} alt="" />
                <span className='Cardproduto-div-03'>
                    <span className='Cardproduto-div-text'>Parafusadeira Furadeira GSB 18V-50</span>
                    <button className='Cardproduto-button'>Manual</button>                    
                </span>
            </span>
        </div>
    )
}