import "./searchItem.css"

const Grace=()=>{
    return(
        <div className="searchItem">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/83588457.jpg?k=f73afcc30f37bc331ce1feb52ff1f5ff83809c2f85b8672e682ed633a6d8edc9&o=&hp=1"
               className="siImg"/>
               <div className="siDesc">
                <h1 className="siTitle">La Grace Hotel</h1>
                 <span className="siDistance">Yaswaddo
                 </span>
                 <span className="siTaxiOp">Free GYM</span>
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
                    <button>8.3</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹1,700</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                     <button className="siCheckButton">See availability</button>
                </div>
               </div>
              
              
        </div>
         
    )

}

export default Grace