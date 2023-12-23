import "./header.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed,faPlane,faCab,faTaxi,faPerson,faCalendarDays,faFlag,faLeaf} from "@fortawesome/free-solid-svg-icons"
import {DateRange} from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header=({type})=>{
    const [destination,setDestination]= useState("")
    const [openDate,setOpenDate]= useState(false)

    const [date,setDate]=useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key:'selection',
        },
    
     ]);
     const [openOptions,setOpenOptions] =useState(false);
     const [options,setOptions]=useState({
        adult:1,
        childern:0,
        room:1,
     });

     const navigate = useNavigate()

     const handleOption=(name,operation)=>{
        setOptions(prev=>{return {
          ...prev,[name] : operation ==="i" ? options[name]  + 1 : options[name] - 1,
       
           };
      });
    };

    const handleSearch=()=>{
        navigate("/hotels",{state:{destination,date,options}})

    }

    return (
         <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                   <div className="headerListItem active">
                     <FontAwesomeIcon icon={faBed} />
                     <span>Stay</span>
                 </div>
                 <div className="headerListItem">
                     <FontAwesomeIcon icon ={faPlane}/>
                     <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCab}/>
                    <span>Car rentals</span>
                     </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faLeaf}/>
                <span>Attractions</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi}/>
                <span>Airport taxies</span>
             </div>
            </div>
            { type !=="list" &&
                <><h1 className="headerTitle">A lifetime of discounts? it's Genius</h1>
            <p className="headerDesc">Get rewarded for your travels -unlock instant savings of 10% with bookings</p>
            <button className="headerBtn">Sing in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faFlag} className="headerIcon"/>
                    <input type="text" placeholder="DESTINATION" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}/>
                     </div>
                    <div className="headerSearchItem"> 
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} TO ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span  onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.childern} childern . ${options.room} room`}</span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optIonText">Adult</span>
                            <div className="optionCounter">
                            <button  disabled={options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                            <span className="optionCounterNumber">{options.adult}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                        </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">childern</span>
                            <div className="optionCounter">
                            <button  disabled={options.childern<=0} className="optionCounterButton"  onClick={()=>handleOption("childern","d")} >-</button>
                            <span className="optionCounterNumber">{options.childern}</span>
                            <button className="optionCounterButton"  onClick={()=>handleOption("childern","i")}>+</button>
                        </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                            <button className="optionCounterButton"  disabled={options.room<=1} onClick={()=>handleOption("room","d")}>-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className="optionCounterButton"  onClick={()=>handleOption("room","i")}>+</button>
                        </div>
                        </div>
                    </div>}
                   </div>
            
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    
                </div>
            </div></>}
        </div>
     </div>

    );
};

 export default Header