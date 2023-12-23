import "./searchItem.css"

const GrandHyt=()=>{
    return(
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/277752827.jpg?k=574d2eaf5e5412890cffebffbe788bd7b907d802313e882f4ad438cbcb8b360b&o=&hp=1"
               className="siImg"/>
               <div className="siDesc">
                <h1 className="siTitle">Grand Hytt</h1>
                 <span className="siDistance">Near P.O GOA University</span>
                 <span className="siTaxiOp">Free WiFi</span>
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
                    <span>Very good</span>
                    <button>8.5</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹3,030</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                     <button className="siCheckButton">See availability</button>
                </div>
               </div>
              
              
        </div>
         
    )

}

export default GrandHyt