import "./featuredProperties.css"

const FeaturedProperties=()=>{
    return(
        <div className="fp">
            <div className="fpItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbazEUyd8ukDdAmwvBvOjuEnBY6DFPw3poOI-XX1k7lJlth3-3WRwLSXG&s=10" className="fpImg"/>
            <span className="fpName"> Aparthotel Stare Miasto</span>
            <span className="fpCity">bengaluru</span>
            <span className="fpPrice">Starting from ₹2,500</span>
            <div className="fpRating">
                <button>8.6</button>
                <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlLaMxU9gQW2FBAQaMh3I1YMq15sCKjOoqQ&usqp=CAU" className="fpImg"/>
            <span className="fpName"> FabHotel</span>
            <span className="fpCity">Bengaluru</span>
            <span className="fpPrice">Starting from ₹2,537</span>
            <div className="fpRating">
                <button>8.1</button>
                <span>Verygood</span>
                </div>
            </div>
            <div className="fpItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIR4EOXq8ALhmIsJpcpik4lj7JmUUZvx3sjQ&usqp=CAU" className="fpImg"/>
            <span className="fpName"> Hotel Kailash park</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from ₹1,800</span>
            <div className="fpRating">
                <button>8.7</button>
                <span>Excellecnt</span>
                </div>
            </div>
            <div className="fpItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNA-PHSGvg8ipYqEDGD-cUzjrCZYL589Flxw&usqp=CAU" className="fpImg"/>
            <span className="fpName"> Hotel cityLite</span>
            <span className="fpCity">Delhi</span>
            <span className="fpPrice">Starting from ₹1,500</span>
            <div className="fpRating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
        </div>

        </div>

    );
};

export default FeaturedProperties