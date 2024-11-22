import { ButtonProps } from "./types"
import "./profileButtonBlack.css";
export const ProfileButtonBlack = (props: ButtonProps) => {
    return(
        <div className="profilebuttonblack-body">
            {props.image ? <img src={props.image} alt=""/> : <></> }<span>{props.text}</span> 
        </div>
    )
}