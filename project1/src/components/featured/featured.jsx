import "./featured.css"


const Featured=()=>{
    return(
    <div className="featured">
        <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Qn2w_7UC24UhiQq0itd0ionlnm3FSDOGbg&usqp=CAU"
               className="featuredImg"/>
             <div className="featuredTitles">
             <h1>Kerala</h1>
             <h2>123 properties</h2>
             </div>
        </div>
        <div className="featuredItem">
            <img src="https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               className="featuredImg"/>
             <div className="featuredTitles">
             <h1>TamilNadu</h1>
             <h2>345 properties</h2>
             </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1572333837703-3f5d7a24c714?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               className="featuredImg"/>
             <div className="featuredTitles">
             <h1>AndhraPredesh</h1>
             <h2>343 properties</h2>
             </div>
        </div>

    </div>
    )
}
export default Featured