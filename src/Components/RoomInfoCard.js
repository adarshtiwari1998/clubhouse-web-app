import React, {useState, useEffect} from "react";
import style from "../style/roomCard.module.css";
import Data from "../Data/RoomCard.json";
import{ BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs"

function RoomInfoCard(props) {
    return (
      <>
       {/* This helps to show the data in a json object on frontend on one place */}
       {/* {Data.map((item) => JSON.stringify(item))} */}
       {Data.map((item) => {
           return (
           <div>
             <div>
                 <div className={style.room_card_container}>
                   <h6>{item.title}</h6>
                   <h2>{item.sub_title}</h2>
                   <div className={style.room_members}>
                     <div>
                       <img src="/images/user-img.jpg" alt="" />
                       <img src="/images/user-img2.jpg" alt="" />
                     </div>
                     <div>
                       {item.members.map((person) => (
                        <p>{person.first_name} {person.last_name} <BsChatDots /></p>
                       ))}
                       <p className="d-flex align-items-center">
                         <span className="mr-2">1.8</span><BsFillPersonFill />
                         <span className="mx-2"></span>{""}
                         <span className="mr-2">5</span><BsChatDotsFill />
                       </p>
                     </div>
                   </div>
                 </div>
             </div>
           </div>
        );
       })}
      </>
    )
}

export default RoomInfoCard;
