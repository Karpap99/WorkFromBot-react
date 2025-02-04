import "./profile.css"
import exit from "../../assets/images/exit-door.svg"
import { ProfileButton } from "../../components/profileButton/profileButton"
import { ProfileSelector } from "../../components/profileSelector/profileSelector"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import user_placeholder from "../../assets/images/profile-default.svg"
import Visa from "../../assets/images/visa.png"
import Mastercard from "../../assets/images/mastercard.png"

export const Profile = () => {
    const [CurrActiveNav, setCurrActiveNav] = useState<number>(0);
    const lang = useSelector((state: RootState) => state.user.lang)
    return(
        <div className="content">
            <ul className="profile_navbar">
                <li className={(CurrActiveNav === 0 ? "profile_nav_active" : "profile_nav")} onClick={()=>setCurrActiveNav(0)}>
                    {lang === 0 ? "Налаштування" : "Settings"}
                </li>
                <li className={(CurrActiveNav === 1 ? "profile_nav_active" : "profile_nav")} onClick={()=>setCurrActiveNav(1)}>
                    {lang === 0 ? "Платіжні дані" : "Payment data"}
                </li>
                <li className={(CurrActiveNav === 2 ? "profile_nav_active" : "profile_nav")} onClick={()=>setCurrActiveNav(2)}>
                    {lang === 0 ? "Створити Резюме" : "Create CV"}
                </li>
                <li className={(CurrActiveNav === 3 ? "profile_nav_active" : "profile_nav")} onClick={()=>setCurrActiveNav(3)}> 
                    {lang === 0 ? "Прив'язати аккаунти" : "Link accounts"}
                </li>
            </ul>
            <div className="profile-exit">
                <p>Вийти</p>
                <img src={exit} alt="" />
            </div>
            <div className="profile_content">
                <div>
                    <img src={user_placeholder} alt="" className="profile-page-image" />
                </div>
                <div className="profile-controls">
                <ProfileButton text="Солошенко Софія" id="1" />
                {
                    CurrActiveNav === 0 ? 
                    <>
                        <ProfileButton text="04.11.2003" />
                        <ProfileSelector text={lang === 0 ? "Мова" : "Language"} action="lang" />
                        <ProfileButton text="Україна" />
                        <ProfileButton text={lang === 0 ? "Приватність та безпека" : "Privacy and security"} />
                        <ProfileButton text="SoloshSof@gmail.com"/>
                        <ProfileButton text={lang === 0 ? "Видалити профіль" : "Delete account"}/>
                    </> :
                    <></>
                }
                {
                    CurrActiveNav === 1 ? 
                    <>
                        <ProfileButton text="**** **** **** 1121" image={Visa} short/>
                        <ProfileButton text="**** **** **** 5678" image={Mastercard} short/>
                        <ProfileButton text={lang === 0 ? "Додати картку" : "Add payment method"} short />
                    </> :
                    <></>
                }
                {
                    CurrActiveNav === 2 ? 
                    <>
                        <ProfileButton text="**** **** **** 1121" />
                        <ProfileButton text="**** **** **** 5678" />
                        <ProfileButton text="Додати картку" />
                    </> :
                    <></>
                }
                {
                    CurrActiveNav === 3 ? 
                    <>
                        <ProfileButton text="**** **** **** 1121" />
                        <ProfileButton text="**** **** **** 5678" />
                        <ProfileButton text="Додати картку" />
                    </> :
                    <></>
                }
            </div>
            </div>
            
        </div>
    )
}