import "./searchItem.css"

const SearchItems=()=>{
    return(
        <div className="searchItem">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/461361522.jpg?k=51bd6f28843bb85634bdb4b4fafc16a9035fad6e90c7466cc95a3cdc5598330b&o=&hp=1"
               className="siImg"/>
               <div className="siDesc">
                <h1 className="siTitle">Fortune Miramar,Goa</h1>
                 <span className="siDistance">3.2Km from River Cruise</span>
                 <span className="siTaxiOp">Free airport Taxi</span>
                 <span className="siSutable">
                 Studio Apartment with Air conditiong </span>
                 <span className="siFeatures">
                    Premium Rooms with Private garden
                    </span>
                    <span className="siCancleOp">Free cancelation</span>
                    <span className="siCancleOpSubtitle">
                        You can cancle later, so lock in this great price today!
                    </span>
               </div>
               <div className="siDetails">
                <div className="siRating">
                    <span>Very good</span>
                    <button>8.4</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹3,700</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                     <button className="siCheckButton">See availability</button>
                </div>
               </div>
              
              
        </div>
         
    )

}

export default SearchItems