import React, { useState } from "react";
import style from "../../style/roomDetails.module.css";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill }  from "react-icons/bs";

function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(true);
  const card = props.cardDetail;
   return (
     <>
        <div className={style.roomDetailContainer}>
          <div className={style.containerHead}>
            <div className={"d-flex align-items-center"}>
             <a onClick={() => {props.setSheetVisible(false)}}>
                <img src="./images/arrow.png" className={style.arrow_icon} alt="" />
                <span>Adarsh</span>
              </a>
            </div>
            <div>
            <AiOutlineFile />
            <img src="./images/user-img-me.png" className={style.profile_img} alt="" />
          </div>
          </div>
           {/* body section */}
          <div className={style.roomDetailSecCard}>
            <div className="d-flex align-items-center justify-content-between flex-wrap"
            style={{padding: "0.6em 1em"}}
            >
              {card.members.map((item) => (
                <div className={style.memberContainerSec}>
                  {micMuteVisible ?  (
                  //if micmutevisible is true then 
                  //then do this
                  <div className={style.audio_icon}> 
                      <BsMicMuteFill />
                  </div>
                  ) : (
                  //do nothing
                    "")}
                  <img src="./images/user-img-me.png"  alt=""/>
                  <p>
                    <span>*</span>
                      {item.first_name} {item.last_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
</>
   )  
};

export default NewRoom;
