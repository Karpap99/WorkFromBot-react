import { SignButtonProps } from "./types"
import "./signButton.css"

export const SignButton = (props: SignButtonProps) => {
    return(
        <div className="signbutton-body">
            {props.image ? <img src={props.image} alt=""/> : <></> }<span>{props.text}</span> 
        </div>
    )
}