import "./searchItem.css"

const Caravela=()=>{
    return(
        <div className="searchItem">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/62495169.jpg?k=6db010be5372ca2475f430b2550494fb285943bb6c405f087b238bad020b96c9&o=&hp=1"
               className="siImg"/>
               <div className="siDesc">
                <h1 className="siTitle">Caravela Beach Resort</h1>
                 <span className="siDistance">Located on Varca Beach
                 </span>
                 <span className="siTaxiOp">Free Breakfast</span>
                 <span className="siSutable">
                 Studio Apartment with Air conditiong

                 </span>
                 <span className="siFeatures">
                 Beachfront accommodation with private balconies
                    </span>
                    <span className="siCancleOp">Free cancelation</span>
                    <span className="siCancleOpSubtitle">
                        You can cancle later, so lock in this great price today!
                    </span>
               </div>
               <div className="siDetails">
                <div className="siRating">
                    <span>Very good</span>
                    <button>8.2</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹2,600</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                     <button className="siCheckButton">See availability</button>
                </div>
               </div>
              
              
        </div>
         
    )

}

export default Caravela