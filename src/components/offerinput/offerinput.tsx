import "./offerinput.css"
import { TOfferInput } from "./types"


export const OfferInput = (props: TOfferInput) => {
    return(
        <div className="offerinput-body">
            {
                props.type === "text" && <input type="text" placeholder={props.placeholder}/>
            }
            {
                props.type === 'checker' && <input type="checkbox"/>
            }
            {
                props.type === 'list' && <input type="checkbox"/>
            }
                
        </div>
    )
}