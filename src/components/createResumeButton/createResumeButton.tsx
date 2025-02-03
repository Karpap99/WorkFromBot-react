import { Link } from "react-router-dom"
import "./createResumeButton.css"

export const CreateResumeButton = () => {
    return(
        <Link to="/create-resume" style={{textDecoration:"none"}}>
            <div className="create-resume-button">
                Створити резюме
            </div>
        </Link>
        

    )
}