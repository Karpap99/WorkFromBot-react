import "./footer.css"
import facebook from "../../assets/images/facebook-logo.svg"
import instagram from "../../assets/images/instagram-logo.svg"
import x from "../../assets/images/x-logo.svg"
import share from "../../assets/images/share-logo.svg"


export const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-content">
                <ul>
                    <li>
                        Політика конфедеційності
                    </li>
                    <li>
                        Публічна оферта
                    </li>
                    <li>
                        Правила використання сервісу
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
                    <h2>Поділись з друзями</h2>
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