import React, { useState } from "react";
import style from "../../style/roomDetails.module.css";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill }  from "react-icons/bs";

function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const card = props.cardDetail;
   return (
  
        <div className={style.roomDetailContainer}>
          <div className={style.head}>
            <div className={"d-flex align-items-center"}>
             <a href="#" onClick={() => {props.setSheetVisible(false)}}
              >
                <img src="" alt="" />
                <h1>ncjcbj</h1>
              </a>
            </div>
          </div>
        </div>

   )  
};

export default NewRoom;
