import { ButtonProps } from "./types"
import "./profileButton.css";
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import {useLang} from "../../hooks/useLang"
import triangle from "../../assets/images/triangle.svg"


export const ProfileButton = (props: ButtonProps) => {
    const lang = useSelector((state: RootState) => state.user.lang);
    const {setLang} = useLang();
    

    const ChangeLang = (x: number) => {
        if(x === -1 && lang===0) setLang(1)
        else if(x === -1) setLang(0)
        else if(x === 1 && lang === 1) setLang(0)
        else if(x === 1) setLang(1)

    }
    return(
        <div className="profilebutton-body">
            {props.image ? <img src={props.image} alt=""/> : <></> }<span>{props.text}</span> 
            {props.id ? <span className="profile_id">id:0</span> : <></>}
            {props.action === "lang" ? <div className="lang_controls">
                    <img src={triangle} className="lang_arrow lang_arrow_left" onClick={()=>ChangeLang(-1)} />
                    <ul className="profile_lang_choose">
                        <li className={(lang === 0 ? "profile_lang_active" : "profile_lang_noactive")}>Українська</li>
                        <li className={(lang === 1 ? "profile_lang_active" : "profile_lang_noactive")}>English</li>
                    </ul>
                    <img src={triangle} className="lang_arrow" onClick={()=>ChangeLang(1)} />
                </div>
                
                : <></>
            }
        </div>
    )
}