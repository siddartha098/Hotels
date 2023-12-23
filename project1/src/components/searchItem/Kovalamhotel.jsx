import "./searchItem.css"

const Kovalamhotel=()=>{
    return(
        <div className="searchItem">
              <img src="https://r1imghtlak.mmtcdn.com/e38158e431af11e4b9eb5ee5da2daa2a.jfif?output-quality=75&downsize=375:*&crop=375:218;0,16&output-format=webp"
               className="siImg"/>
               <div className="siDesc">
                <h1 className="siTitle">Kovalam Beach Hotel,kerla</h1>
                 <span className="siDistance">1-2 mins from kovalam Beach
                 </span>
                 <span className="siTaxiOp">Free Breakfast</span>
                 <span className="siSutable">
                 Discover the Best Luxuary rooms

                 </span>
                 <span className="siFeatures">
                    A heritage boutique accommodation 
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
                    <span className="siPrice">₹3,180</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                     <button className="siCheckButton">See availability</button>
                </div>
               </div>
              
              
        </div>
         
    )

}

export default Kovalamhotel