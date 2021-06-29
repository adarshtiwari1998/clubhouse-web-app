import React from 'react';
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from  "../style/bottomSheet.module.css";
import StartRoom from "./bottom_sheet/StartRoom";


function BottomSheet(props) {
    return (
       <SwipeableBottomSheet style={{width: "34%", margin: "auto"}}
       open={props.sheetVisible}
        onChange={() => {
         props.setSheetVisible(!props.sheetVisible);
         props.setItemsVisible(true);
        }}
        fullScreen={props.sheetTitle === "room detail" ? true : false} >
        <div className={style.BottomSheetContainer} 
         style={{backgroundColor: props.sheetTitle === "profile" ? "transparent" : ""}}>
        <StartRoom setSheetCreateRoom={props.setSheetCreateRoom} set
           setSheetVisible={(item) => {
           props.setSheetVisible(item);
           props.setItemsVisible(true);
           }}
        />
        </div>
       </SwipeableBottomSheet>
    );
}

export default BottomSheet;