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
          <div className={style.head}>
            <div className={"d-flex align-items-center"}>
             <a href="#" onClick={() => {props.setSheetVisible(false)}}
              >
                <img src="./images/arrow.png" className={style.arrow_icon} alt="" />
                <span>Adarsh</span>
              </a>
            </div>
          </div>
          <div>
            <AiOutlineFile />
            <img src="./images/user-img.jpg" className={style.profile_img} alt="" />
          </div>
        </div>
</>
   )  
};

export default NewRoom;
