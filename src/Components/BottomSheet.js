import React from 'react';
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from  "../style/bottomSheet.module.css";
import StartRoom from "./bottom_sheet/StartRoom";
import NewRoom from "./bottom_sheet/NewRoom";


function BottomSheet(props) {
    return (
       <SwipeableBottomSheet style={{width: "35%", margin: "auto"}}
       open={props.sheetVisible}
        onChange={() => {
         props.setSheetVisible(!props.sheetVisible);
         props.setItemsVisible(true);
        }}
        fullScreen={props.sheetTitle == "room detail" ? true : false} >
        <div className={style.BottomSheetContainer} 
         style={{backgroundColor: props.sheetTitle == "profile" ? "transparent" : ""}}>
         {/* nested statement  */}
         {props.sheetTitle == "new room" ? ( 
         <NewRoom
           cardDetail={props.cardDetail}
           setSheetVisible={(item) => {
             props.setSheetVisible(item);
             props.setItemsVisible(true);
           }}
           />
          //nested ternery operator 
         ) : props.sheetTitle == "start room" ? (
            <StartRoom 
            setSheetCreateRoom={props.setSheetCreateRoom} 
            setSheetVisible={(item) => {
              props.setSheetVisible(item);
              props.setItemsVisible(true);
          }}
        />
        //otherwise do nothing
         ) : (
            ""
         )}
        </div>
       </SwipeableBottomSheet>
    );
}

export default BottomSheet;
