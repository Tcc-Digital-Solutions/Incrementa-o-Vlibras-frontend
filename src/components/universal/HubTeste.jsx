import '../../assets/css/css_universal/HubTeste.css'
import { useNavigate } from "react-router-dom";

export const HubTeste = (props) => {
    const navigate = useNavigate();

    const proosScreen = () => {
        navigate("/home")

    }
    const proosScreen1 = () => {
        navigate("/login")

    }
    const proosScreen2 = () => {
        navigate("/informacoes/45445")

    }

    return (
        <div className="HubTeste-div" >
            <button className='HubTeste-button' onClick={() => proosScreen()}>Home</button>
            <button className='HubTeste-button' onClick={() => proosScreen1()}>Login</button>
            <button className='HubTeste-button' onClick={() => proosScreen2()}>Manual</button>
        </div>
    )
}
