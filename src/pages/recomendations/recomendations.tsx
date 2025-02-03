import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useState } from "react";
import { CreateResumeButton } from "../../components/createResumeButton/createResumeButton";
import "./recomendations.css"
import Emoji from "../../assets/images/emoji.png";

export const Recomendations = () => {
    const IsAuthed = useSelector((state: RootState) => state.user.isAuthed);
    const [Recomendations, setRecomendations] = useState<Array<string>>()
    return(
        <div className="recomendations_body">
            <div className="recomendations_inner">
            {
                IsAuthed ? 
                <>
                    {
                        Recomendations ?
                        <></>
                        :
                        <div className="norecomendations-body">
                            <img className="Emoji" src={Emoji}/>
                            <h2>Ой йой...</h2>
                            <h2>У вас поки немає рекомендацій<br/>
                            створіть резюме і ми обов'язково вам допоможемо</h2>
                            <CreateResumeButton/>
                        </div>
                    }
                </> 
                : 
                <>
                    <div>
                        Для використання цієї функції необхідно авторизуватись
                    </div>
                </>
            }
            </div>

        </div>
            
        
       
    )
}