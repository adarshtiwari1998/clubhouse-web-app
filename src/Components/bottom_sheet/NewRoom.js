import React, { useState } from "react";
import style from "../../style/roomDetails.module.css";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill }  from "react-icons/bs";

function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
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
            <img src="./images/profile-pic.png" className={style.profile_img} alt="" />
          </div>
          </div>
        </div>
</>
   )  
};

export default NewRoom;
