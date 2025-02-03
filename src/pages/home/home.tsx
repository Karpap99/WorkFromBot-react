import "./home.css"
import bee from "../../assets/images/bee-image.svg"
import hex from "../../assets/images/bee-hex.svg"
import { OfferCard } from "../../components/offercard/offercard"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

export const Home = () => {
    const lang = useSelector((state: RootState) => state.user.lang)
    return(
        <div className="content">
            <div className="home-uppercontent">
                <div>
                    <h1>
                        РОБОТА <span>від</span> БОТА 
                    </h1>
                    <h2>
                        {lang === 0 ? 
                            <>
                                Найкращий сайт де ви знайдете<br/> 
                                роботу своєї мрії
                            </>
                        : 
                            <>
                                The best site where you will find<br/> 
                                your dream job
                            </>
                        } 
                        
                    </h2>
                    <div className="home-find-more">
                        {lang === 0 ? 
                            <>
                                Дізнатися про нас БІЛЬШЕ
                            </>
                        : 
                            <>
                                Learn More About Us
                            </>
                        } 
                        
                    </div>
                </div>
                <div className="home-uppercontentimages">
                    <img className="home-hex" src={hex} alt=""/>
                    <img className="home-bee" src={bee} alt=""/>
                </div>
            </div>
            <div className="home-offers-table">
                    <OfferCard
                        uuid="fa"
                        name="Web"
                        price="22000-22000"
                        category="Front"
                        location="Uk"
                        description="awfawfawfawfawffawfsadaaaaaaa"
                        tranding={true}   
                    />
                    <OfferCard
                        uuid="fa"
                        name="Web"
                        price="22000-22000"
                        category="Front"
                        location="Uk"
                        description="awfawfawfawfawfsadaaaaaa"
                        tranding={true}    
                    />
                    <OfferCard
                        uuid="fa"
                        name="Web"
                        price="22000-22000"
                        category="Front"
                        location="Uk"
                        description="awfawfawfawfawfsadaaaaaa"
                        tranding={true}   
                    />
                    <OfferCard
                        uuid="fa"
                        name="Web"
                        price="22000-22000"
                        category="Front"
                        location="Uk"
                        description="awfawfawfawfawfsadaaaaaa"
                        tranding={true}   
                    />
                    <OfferCard
                        uuid="fa"
                        name="Web"
                        price="22000-22000"
                        category="Front"
                        location="Uk"
                        description="awfawfawfawfawfsadaaaaaa"
                        tranding={true}    
                    />
                    <OfferCard
                        uuid="fa"
                        name="Web"
                        price="22000-22000"
                        category="Front"
                        location="Uk"
                        description="awfawfawfawfawfsadaaaaaa"
                        tranding={true}    
                    />
          </div>
            
        </div>
    )
}