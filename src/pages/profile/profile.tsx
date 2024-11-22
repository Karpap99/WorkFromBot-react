import "./profile.css"
import exit from "../../assets/images/exit-door.svg"
import userPlaceholder from "../../assets/images/profile-default.svg"
import { ProfileButton } from "../../components/profileButton/profileButton"
import information from "../../assets/images/information.svg"

export const Profile = () =>{
    return(
        <div className="content" style={{paddingTop: "40px"}}>
            <div className="profile-exit">
                <p>Вийти</p>
                <img src={exit}/>
            </div>
            <div className="profile-upper">
                <img className="profile-image" src={userPlaceholder} alt=""/>
                <div className="profile-upper-right">
                    <h2>Вундервафля Софія</h2>
                    <ProfileButton text="Налаштування" image={information}/>
                </div>
            </div>

            <div>
                <div>
                    <ProfileButton text="Налаштування" image={information}/>
                    <ProfileButton text="Налаштування" image={information}/>
                </div>
                <div>
                    <ProfileButton text="Налаштування" image={information}/>
                    <ProfileButton text="Налаштування" image={information}/>
                </div>
            </div>
            
        </div>
    )
}