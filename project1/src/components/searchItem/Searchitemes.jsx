import "./searchItem.css"

const Searchitemes=()=>{
    return(
        <div className="searchItem">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/503553281.jpg?k=66ce92b2b70f0e66144a589ef6c81a5ccf019c4bb0982def8144e9f70bf9b54d&o=&hp=1"
               className="siImg"/>
               <div className="siDesc">
                <h1 className="siTitle">RONALDOS OLD GOA</h1>
                 <span className="siDistance">1.4Km from Basilics of Bom Jesus</span>
                 <span className="siTaxiOp">Free Breakfast</span>
                 <span className="siSutable">
                 Studio Apartment with Air conditiong

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
                    <span>Exceptional</span>
                    <button>10</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹3,670</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                     <button className="siCheckButton">See availability</button>
                </div>
               </div>
              
              
        </div>
         
    )

}

export default Searchitemes