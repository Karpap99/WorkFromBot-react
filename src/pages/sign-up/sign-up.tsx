import { Link } from "react-router-dom"
import bee from "../../assets/images/bee-image.svg"
import "./sign-up.css"
import { SignInput } from "../../components/sign-input/sign-input"
import { SignButton } from "../../components/signButton/signButton"
import googlelogo from "../../assets/images/google-logo.svg"

export const SignUp = () => {
    return(
        <div className="sign-container">
            <div className="sign-container-inner">
                <Link to="/main">
                    <img className="sign-bee-logo" src={bee} alt=""/>
                </Link>
                <div className="sign-company-name">
                    РОБОТА
                    <br/><span>від</span> БОТА
                </div>
                <div className="sign-type">РЕЄСТРАЦІЯ</div>
                <SignInput placeholder="Ім'я та прізвище"/>
                <SignInput placeholder="Електронна пошта"/>
                <SignInput placeholder="Пароль" password/>
                <SignButton text="ЗАРЕЄСТРУВАТИСЬ"/>
                <SignButton text="Продовжити з гугл" image={googlelogo}/>
                <p className="sign-accout-question">Вже є Аккаунт? <Link className="sign-accout-question-action" to="/sign-in">Вхід</Link></p>
            </div>
        </div>
    )
}