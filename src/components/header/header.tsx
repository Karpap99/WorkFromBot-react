import { Link } from "react-router"
import "./header.css"
import logo from "../../assets/images/bee-image.svg"
import searching from "../../assets/images/searching.svg"
import { useLocation } from "react-router-dom"
import { AccountButton } from "../accountButton/accountButton"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"


export const Header = () => {
        const location  = useLocation();
        const active = {
            textDecoration: "underline", 
            fontWeight: 700
        }
        const lang = useSelector((state: RootState) => state.user.lang)
        return(
        <header>
            <div className="header">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo"/>
                </Link>
                <Link className="navbar-element" style={location.pathname === "/" ? active : {}} to="/">{lang === 0 ? "Головна" : "Home"}</Link> 
                <Link className="navbar-element" style={location.pathname === "/offers" ? active : {}} to="/offers">{lang === 0 ? "Вакансії" : "Vacancies"}</Link>
                <Link className="navbar-element" style={location.pathname === "/recomendations" ? active : {}} to="/recomendations">{lang === 0 ? "Рекомендації" : "Recomendations"}</Link>
                <Link className="navbar-element" style={location.pathname === "/support" ? active : {}} to="/support">{lang === 0 ? "Підтримка" : "Support"}</Link>
                <div className="searchbar">
                    <input className="searchbar-input" type="text"></input>
                    <img className="searching" src={searching} alt=""/>
                </div>
                <AccountButton></AccountButton>
            </div>
        </header>
        )
}