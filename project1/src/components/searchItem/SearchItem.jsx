import "./searchItem.css"

const SearchItem=()=>{
    return(
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
               className="siImg"/>
               <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                 <span className="siDistance">500m from center</span>
                 <span className="siTaxiOp">Free airport Taxi</span>
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
                    <span>Excellect</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$100</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                     <button className="siCheckButton">See availability</button>
                </div>
               </div>
              
              
        </div>
         
    )

}

export default SearchItem