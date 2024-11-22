import "./sign-input.css"
import { SignInputProps } from "./types"
import star from "../../assets/images/star.svg"

export const SignInput = (props: SignInputProps) => {
    return(
        <div className="signinput-body">
            <div className="signinput-placeholder">{props.placeholder}</div>
            <input type={props.password ? "password" : "text"} placeholder={props.placeholder}/>
            {
                props.password ? 
                <div className="pass_dificult">
                    <div>Надійність пароля</div>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div> :
                <></>
            }
        </div>
    )
}