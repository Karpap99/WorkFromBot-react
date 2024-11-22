import { Link } from "react-router"
import "./header.css"
import logo from "../../assets/images/bee-image.svg"
import searching from "../../assets/images/searching.svg"
import { useLocation } from "react-router-dom"
import { AccountButton } from "../accountButton/accountButton"

export const Header = () => {
    const location  = useLocation();
    const active = {
        textDecoration: "underline", 
        fontWeight: 700
    }
    return(
    <header>
        <div className="header">
            <Link to="/main">
                <img className="logo" src={logo} alt="logo"/>
            </Link>
            
            <ul className="navbar">
                <li>
                    <Link className="navbar-element" style={location.pathname === "/main" ? active : {}} to="/main">Головна</Link>
                </li>
                <li>
                    <Link className="navbar-element" style={location.pathname === "/offers" ? active : {}} to="/offers">Вакансії</Link>
                </li>
                <li>
                    <Link className="navbar-element" style={location.pathname === "/recomendations" ? active : {}} to="/recomendations">Рекомендації</Link>
                </li>
                <li>
                    <Link className="navbar-element" style={location.pathname === "/support" ? active : {}} to="/support">Підтримка</Link>
                </li>
            </ul>
            <div className="searchbar">
                <input className="searchbar-input" type="text"></input>
                <img className="searching" src={searching} alt=""/>
            </div>
            <AccountButton></AccountButton>
        </div>
    </header>
    )
}