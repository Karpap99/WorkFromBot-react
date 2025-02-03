import "./footer.css"
import facebook from "../../assets/images/facebook-logo.svg"
import instagram from "../../assets/images/instagram-logo.svg"
import x from "../../assets/images/x-logo.svg"
import share from "../../assets/images/share-logo.svg"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

export const Footer = () => {
    const lang = useSelector((state: RootState) => state.user.lang)
    return(
        <div className="footer">
            <div className="footer-content">
                <ul>
                    <li>
                        {lang === 0 ? "Політика конфедеційності" : "Privacy policy"} 
                    </li>
                    <li>
                        {lang === 0 ? "Публічна оферта" : "Public offer"}
                    </li>
                    <li>
                        {lang === 0 ? "Правила використання сервісу" : "Rules for the use of service"} 
                    </li>
                </ul>
                <div className="footer-contacts">
                    <ul>
                        <li>Mail: </li>
                        <li>Phone: </li>
                        <li>Telegram: </li>
                    </ul>
                    <ul>
                        <li><a href="mailto:ktkrkkokfj@uthghurh.com">ktkrkkokfj@uthghurh.com</a></li>
                        <li><a href="tel:+380987563524">+380987563524</a></li>
                        <li><a href="https:/t.me/@Robobot">@Robobot</a> </li>
                    </ul>
                </div>
                <div className="side-line"/>
                <div className="footer-share">
                    <h2>{lang === 0 ? "Поділись з друзями" : "Share with friends"} </h2>
                    <div className="footer-share-logo">
                        <img src={instagram} alt=""/>
                        <img src={facebook} alt=""/>
                        <img src={x} alt=""/>
                        <img src={share} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}