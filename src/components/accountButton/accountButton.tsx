import { useState } from "react"
import { Link } from "react-router"
import "./accountButton.css"
import profiledefault from "../../assets/images/profile-default.svg"

export const AccountButton = () => {
    const [IsAuthed, setIsAuthed] = useState<boolean>(false)

    return(
        <>
            {
                IsAuthed ?
                <div className="accountButtons">
                    <Link to="/profile">
                        <img className="profile-image" src={profiledefault} alt="" />
                    </Link>
                </div>
                :
                (
                    <div className="accountButtons">
                        <Link className="sign-in" to="/sign-in">Увійти</Link>
                        <Link className="sign-up" to="/sign-up">Створити аккаунт</Link>
                    </div>
                    
                )
                
            }

        </>
    )
}