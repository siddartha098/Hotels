import "./searchItem.css"

const Searchitm=()=>{
    return(
        <div className="searchItem">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/94602264.jpg?k=a049abe5d16f2b5eba3cf4495b2c5f3eff4fcf8dac8ab9a9de14d4fcd5e215d2&o=&hp=1"
               className="siImg"/>
               <div className="siDesc">
                <h1 className="siTitle">Blue Lagoon Resort</h1>
                 <span className="siDistance">2Km form small Cola Beach
                 </span>
                 <span className="siTaxiOp">Free WiFi</span>
                 <span className="siSutable">Studio Apartment with Air conditiong
                 </span>
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
                    <button>8.1</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹1,560</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                     <button className="siCheckButton">See availability</button>
                </div>
               </div>
              
              
        </div>
         
    )

}

export default Searchitm