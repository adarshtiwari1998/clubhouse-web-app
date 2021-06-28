import React, {useState} from "react";
import DailyInfoCard from "../Components/DailyInfoCard";
import Header from "../Components/Header";
import RoomInfoCard from "../Components/RoomInfoCard";
import style from "../style/home.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import data from "../Data/RoomCard.json";
import BottomSheet from "../Components/BottomSheet";

function Home() {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);  
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const[cardId, setCardId] = useState(1);
  
  return (
    // jsx fragment
    <>
      <Header />
      <div className={style.home_container}>
       <DailyInfoCard />
       <RoomInfoCard />
      </div>
      <div className={style.action_btn}>
       <button onClick={() => setSheetVisible(true)}>
        <AiOutlinePlus className="mr-2" />
         Start a Room Chat
       </button>
        <button>
         <BsGrid3X3Gap />
       </button>
       </div>
         <BottomSheet
         sheetTitle="Start a Room"
         setSheetVisible={(item) => setSheetVisible(item)}
         sheetVisible={sheetVisible}
         cardDetail={data.find((item) => item.id === cardId)}
         setItemsVisible={(item) => setItemsVisible(item)}
         setSheetCreateRoom = {(item) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoaderVisibility(false);
          }, 1000);
         }}
          />   
       </>
  );
}

export default Home;
