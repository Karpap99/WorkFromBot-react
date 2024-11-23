import "./profile.css"
import exit from "../../assets/images/exit-door.svg"
import userPlaceholder from "../../assets/images/profile-default.svg"
import { ProfileButton } from "../../components/profileButton/profileButton"
import { ProfileButtonBlack } from "../../components/profileButtonBlack/profileButton"
import information from "../../assets/images/information.svg"
import deletion from "../../assets/images/account-deletion.svg"

export const Profile = () =>{
    return(
        <div className="content" style={{paddingTop: "40px"}}>
            <div className="profile-exit">
                <p>Вийти</p>
                <img src={exit} alt="" />
            </div>
            <div className="profile-upper">
                <img className="profile-image" src={userPlaceholder} alt=""/>
                <div className="profile-upper-right">
                    <h2>Вундервафля Софія</h2>
                    <ProfileButton text="Особиста інформація" image={information}/>
                </div>
            </div>

            <div className="profile-controls">
                <div className="profile-controls-column">
                    <ProfileButton text="Налаштування" image={information}/>
                    <ProfileButton text="Прив'язати акаунти" image={information}/>
                </div>
                <div className="profile-controls-column">
                    <ProfileButton text="Створити резюме" image={information}/>
                    <ProfileButton text="Платіжні дані" image={information}/>
                </div>
            </div>
            <div className="profile-bottom">
                <ProfileButtonBlack text="Видалити профіль" image={deletion}/>
            </div>
            
        </div>
    )
}