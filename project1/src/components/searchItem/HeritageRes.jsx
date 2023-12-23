import "./searchItem.css"

const HeritageRes=()=>{
    return(
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/278373372.jpg?k=9b1ca1463e6189f09ec5525914ec05ed6391cc45bab61ebc1c7474ce4cd87704&o=&hp=1"
               className="siImg"/>
               <div className="siDesc">
                <h1 className="siTitle">Heritage Village Resort&Spa</h1>
                 <span className="siDistance">Near Arossim Beach</span>
                 <span className="siTaxiOp">Free Taxi</span>
                 <span className="siSutable">
                    Studio Apartment with Air conditiong
                 </span>
                 <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m2 1 full bed  
                    </span>
                    <span className="siCancleOp">Free cancelation</span>
                    <span className="siCancleOpSubtitle">
                        You can cancle later, so lock in this great price today!
                    </span>
               </div>
               <div className="siDetails">
                <div className="siRating">
                    <span>Fabulous</span>
                    <button>8.6</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹4,770</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                     <button className="siCheckButton">See availability</button>
                </div>
               </div>
              
              
        </div>
         
    )

}

export default HeritageRes