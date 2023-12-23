import "./searchItem.css"

const Searchitt=()=>{
    return(
        <div className="searchItem">
            <img src=""
               className="siImg"/>
               <div className="siDesc">
                <h1 className="siTitle">Holiday Inn Resort</h1>
                 <span className="siDistance">Located along Monbor Beach</span>
                 <span className="siTaxiOp">Free Service</span>
                 <span className="siSutable">
                    Permium Rooms and Private garden
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
                    <span className="siPrice">₹2,560</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                     <button className="siCheckButton">See availability</button>
                </div>
               </div>
              
              
        </div>
         
    )

}

export default Searchitt