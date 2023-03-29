import '../../assets/css/css_universal/Loading.css'
import furadeiraImg from '../../assets/img/furadeira 1.png'

export const Loading = (props) => {


    return (
        <div className="loading-div" >
            <div class="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                {/* <img src={furadeiraImg} alt="" /> */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}