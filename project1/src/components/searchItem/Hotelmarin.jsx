import "./searchItem.css"

const Hotelmarin=()=>{
    return(
        <div className="searchItem">
              <img src="https://r1imghtlak.mmtcdn.com/fc50de1aeb5611e9baa30242ac110003.jpg?&output-quality=75&downsize=328:180&crop=328:180;11,0&output-format=webp"
               className="siImg"/>
               <div className="siDesc">
                <h1 className="siTitle">Hotel Marine Palace,kerla</h1>
                 <span className="siDistance">Located on near Kovalam Beach
                 </span>
                 <span className="siTaxiOp">Free Breakfast</span>
                 <span className="siSutable">
                 BudgetFree Hotel with quality services

                 </span>
                 <span className="siFeatures">
                 prime location of beachveiw 
                    </span>
                    <span className="siCancleOp">Free cancelation</span>
                    <span className="siCancleOpSubtitle">
                        You can cancle later, so lock in this great price today!
                    </span>
               </div>
               <div className="siDetails">
                <div className="siRating">
                    <span> good</span>
                    <button>7.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹4,986</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                     <button className="siCheckButton">See availability</button>
                </div>
               </div>
              
              
        </div>
         
    )

}

export default Hotelmarin