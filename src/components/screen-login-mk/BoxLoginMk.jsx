import '../../assets/css/css-login-mk/BoxLoginMk.css'
import boschLogo from '../../assets/img/Bosch-logo.png'
import userImg from '../../assets/img/🦆 icon _user_.png'
import passImg from '../../assets/img/🦆 icon _lock_.png'
import mascotinhoImg from '../../assets/img/Group_1-removebg-preview 1 1.png'

export const BoxLoginMk = () => {
    return (
        <div className="box-login-mk-div" >

            <span className="box-login-mk-login">
                <img src={boschLogo} alt="" />
                <form action={`/cadastro-manual`} className="box-login-mk-form">
                    <span className="box-login-mk-input-span">
                        <div className="box-login-mk-input-user">
                            <img src={userImg} alt="" />
                            <input className="box-login-mk-input" type="text" name="nome" required />
                        </div>
                        <div className="box-login-mk-input-fake"></div>
                    </span>
                    <span className="box-login-mk-input-span">
                        <div className="box-login-mk-input-user">
                            <img src={passImg} alt="" />
                            <input className="box-login-mk-input" type="password" name="password1" required maxlength="10" min="8" />
                        </div>
                        <div className="box-login-mk-input-fake"></div>
                    </span>
                    <button type='submit' className='box-login-mk-button'>ENTRAR</button>
                </form>
            </span>
            <img className="box-login-mk-img-mascotinho" src={mascotinhoImg} alt="" />
        </div>
    )
}