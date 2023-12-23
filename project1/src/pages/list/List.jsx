import "./list.css"
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useLocation } from "react-router-dom"
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import SearchItems from "../../components/searchItem/SearchItems";
import Searchitemes from "../../components/searchItem/Searchitemes";
import Searchitm from "../../components/searchItem/Searchitm";
import Caravela from "../../components/searchItem/Caravela";
import HeritageRes from "../../components/searchItem/HeritageRes";
import GrandHyt from "../../components/searchItem/GrandHyt";
import Kovalamhotel from "../../components/searchItem/Kovalamhotel";
import Hotelmarin from "../../components/searchItem/Hotelmarin";
import Nilastay from "../../components/searchItem/Nilastay";


 const List=()=>{

   const location =useLocation()
   const [destination,setDestination]=useState(location.state.destination)
   const [date,setDate]=useState(location.state.date)
   const [openDate,setOpenDate]=useState(false)
   const [options,setOptions]=useState(location.state.options)

    return(
    <div><Navbar/>
    <Header type="list"/>
    <div className="listContainer">
      <div className="listWrapper">
         <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
               <label>Destination</label>
               
               <input type="text" placeholder={destination}/>
            </div>
            <div className="lsItem">
               <label>Check-In Date</label>
               <span onClick={()=>setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format( date[0].endDate,"MM/dd/yyyy")}`}
               </span>
               { openDate && (
               <DateRange
               onChange={item=>setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
                />
                )}
            </div>
            <div className="lsItem">
               <label>Options</label>
               <div className="lsOptions">    
               <div className="lsOptionItem">
                  <span className="lsOptionText">
                     Min price <small>per night</small>
                  </span>
                   <input type="number" className="lsOptionInput"/>
               </div>
               <div className="lsOptionItem">
                  <span className="lsOptionText">
                     Max price <small>per night</small>
                  </span>
                   <input type="number" className="lsOptionInput"/>
               </div>
               <div className="lsOptionItem">
                  <span className="lsOptionText">
                     Adult
                  </span>
                   <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
               </div>
               <div className="lsOptionItem">
                  <span className="lsOptionText">
                     Childern
                  </span>
                   <input type="number" min={0} className="lsOptionInput" placeholder={options.childern}/>
               </div>
               <div className="lsOptionItem">
                  <span className="lsOptionText">
                     Room
                  </span>
                   <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
               </div>
               </div>
            </div>
            <button>Search</button>
         </div>
         <div className="listResult">
            
            <SearchItems/>
            <Searchitemes/>
            <Searchitm/>
            <Caravela/>
            <HeritageRes/>
            <GrandHyt/>
            <Kovalamhotel/>
            <Hotelmarin/>
            <Nilastay/>
            
            
            
            </div>
       </div>
     </div>
     </div>
     );
    };
    export default List; 