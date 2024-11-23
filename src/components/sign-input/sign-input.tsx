import "./sign-input.css"
import { SignInputProps } from "./types"
import star from "../../assets/images/star.svg"
import { useEffect, useState } from "react"
import passwordVisible from "../../assets/images/passwordVisible.svg"
import passwordNotVisible from "../../assets/images/passwordNotVisible.svg"

export const SignInput = (props: SignInputProps) => {
    const [passwordCheck, setPasswordCheck] = useState<boolean>(false);

    useEffect(()=>{
        if(props.password){
            setPasswordCheck(true)
        }
    },[])

    const handlePasswordCheckerClick = () => setPasswordCheck(!passwordCheck)

    return(
        <div className="signinput-body">
            <div className="signinput-placeholder">{props.placeholder}</div>
            <div className="signinput-inputzone">
                <input type={passwordCheck ? "password" : "text"} placeholder={props.placeholder}/>
                {props.password ? 
                <img 
                    className="password-checker" 
                    src={!passwordCheck ? passwordVisible : passwordNotVisible} 
                    alt="" 
                    onClick={()=>handlePasswordCheckerClick()}/> : null}
            </div>
            {
                props.passwordDiffCheck ? 
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