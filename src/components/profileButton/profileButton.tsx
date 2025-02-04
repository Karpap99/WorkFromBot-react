import { ButtonProps } from "./types"
import "./profileButton.css";


export const ProfileButton = (props: ButtonProps) => {
    return(
        <div className="profilebutton-body" style={props.short ? {width: "auto"} : {}} onClick={()=> props.onClick}>
            <div style={{flex:1, alignItems:"center",}}>{props.image ? <img className="profile-button-image" src={props.image} alt=""/> : <></> }<span>{props.text}</span> </div>
            {props.id ? <span className="profile_id">id:0</span> : <></>}
        </div>
    )
}