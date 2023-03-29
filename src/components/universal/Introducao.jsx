import '../../assets/css/css_universal/Introducao.css'
import { useNavigate } from "react-router-dom";
import { HubTeste } from './HubTeste';

export const Introducao = (props) => {
    const navigate = useNavigate();

    const proosScreen = () => {
        navigate("/home")

    }

    return (
        <div className="Introducao-div" >
            <button className='Introducao-button' onClick={() => proosScreen()}>Continuar</button>
            <HubTeste/>
        </div>
    )
}
