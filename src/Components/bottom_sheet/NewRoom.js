import React, {useState} from 'react';
import style from "../../style/roomDetail.module.css";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill }  from "react-icons/bs";

function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const card = props.cardDetail;

//   const [sheetCreateRoom, setSheetCreateRoom] = useState(false);  
//   const [loaderVisibility, setLoaderVisibility] = useState(false);
//   const [cardId, setCardId] = useState(1);
    return (
        <div>
        <h2>New Room</h2>
        </div>
    )
}

export default NewRoom
