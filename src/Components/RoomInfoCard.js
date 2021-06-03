import React, {useState, useEffect} from "react";
import style from "../style/roomCard.module.css";
import Data from "../Data/RoomCard.json";

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
                 </div>
             </div>
           </div>
        );
       })}
      </>
    )
}

export default RoomInfoCard
