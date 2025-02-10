import "./support.css"
import attach from "../../assets/images/attach.png"
import questions from "../../assets/images/questions.svg"
import camera from "../../assets/images/camera.png"

export const Support = () => {
    return (
        <div className="content">
            <div>
                <div className="message-layout">
                    <div className="support-elements">
                        <div className="support-element">
                            <img alt="" src={questions} className="support-icon"></img>
                        </div>
                        <input type="file" id="FileSent" style={{display:"none"}}/>
                        <label htmlFor="FileSent ">
                            <div className="support-element" >
                                <img alt="" src={attach} className="support-icon"/>
                            </div>
                        </label>

                        <input type="image" id="ImageSent" alt=""/>
                        <label htmlFor="ImageSent">
                            <div className="support-element">
                                <img alt="" src={camera} className="support-icon"/>
                            </div> 
                        </label>
                        <input className="support-input-field" type="text" placeholder="Пиши"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}