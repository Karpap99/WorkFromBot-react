import { ButtonProps } from "./types"
import "./profileButton.css";
export const ProfileButton = (props: ButtonProps) => {
    return(
        <div className="profilebutton-body">
            <img src={props.image} alt=""/><span>{props.text}</span> 
        </div>
    )
}