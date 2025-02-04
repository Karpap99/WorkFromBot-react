import "./support.css"
import attach from "../../assets/images/attach.png"

export const Support = () => {
    return (
        <div className="content">
            <div>
                <div className="message-layout">
                    <div className="support-elements">
                        <div className="support-element">

                        </div>
                        <div className="support-element" >
                            <input type="file" id="FileSent" style={{display:"none"}}/>
                            <label htmlFor="FileSent ">
                                <img alt="" src={attach} className="support-icon"></img>
                            </label>
                        </div>
                        <div className="support-element">
                            <input type="image" id="ImageSent" alt=""/>
                            <label htmlFor="ImageSent">
                                <img alt="" src={attach} className="support-icon"></img>
                            </label>
                        </div>
                        <input className="support-input-field" type="text" placeholder="Пиши - не буду"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}