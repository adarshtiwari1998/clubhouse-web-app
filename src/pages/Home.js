import React, {useState} from "react";
import DailyInfoCard from "../Components/DailyInfoCard";
import Header from "../Components/Header";
import RoomInfoCard from "../Components/RoomInfoCard";
import style from "../style/home.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import data from "../Data/RoomCard.json";
import BottomSheet from "../Components/BottomSheet";
import loadertwoimg from "../images/loader.gif";
import NewRoomData from "../Data/newRoomData.json";

function Home() {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);  
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);
  
  return (
    // jsx fragment
    <>
    {loaderVisibility ? (
      <div style={{ 
      position: "fixed",
      top: "-30px",
      right: "0",
      bottom: "0",
      left: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"}}>
      <img src={loadertwoimg} alt="" />
      </div>
    ) : (
      ""
    )} 
      <Header />
      <div className={style.home_container}>
       <DailyInfoCard />
       <RoomInfoCard />
      </div>
      <div className={style.action_btn}>
       <button onClick={() => setSheetVisible(true)}>
        <AiOutlinePlus className="mr-2" />
         Start a Room
       </button>
        <button>
         <BsGrid3X3Gap />
       </button>
       </div>
         <BottomSheet
         sheetTitle="start room"
         setSheetVisible={(item) => setSheetVisible(item)}
         sheetVisible={sheetVisible}
         cardDetail={data.find((item) => item.id === cardId)}
         setItemsVisible={(item) => setItemsVisible(item)}
         setSheetCreateRoom={(item) => { 
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoaderVisibility(false);
          }, 1000);
         }} />

        <BottomSheet 
        sheetTitle="new room"
        setSheetVisible={(item) => setSheetCreateRoom(item)}
        sheetVisible={sheetCreateRoom}
        cardDetail={NewRoomData}
        setItemsVisible={(item) => setItemsVisible(item)}
        />
       </>
  );
}

export default Home;
