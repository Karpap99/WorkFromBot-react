import { offer } from "./types"
import trending from "../../assets/images/trending.svg"
import "./offercard.css"

export const OfferCard = (offer: offer) => {
    return(
        <div className="offercard">
            <div className="offercard-header">
                <h2>
                    {offer.name}
                </h2>
                <img src={trending} alt="" style={!offer.tranding ? {display: "none"} : {}}/>
            </div>
            <div>
                <h3 style={{fontWeight: 600}}>{offer.price}</h3>
                <h3 style={{fontWeight: 400}}>{offer.category} {offer.location}</h3>
            </div>
            
            <p className="offercard-description" style={{margin: 0}}>{offer.description}</p>
        </div>
    )
}