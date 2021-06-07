import React from "react";
import DailyInfoCard from "../Components/DailyInfoCard";
import Header from "../Components/Header";
import RoomInfoCard from "../Components/RoomInfoCard";
import style from "../style/home.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs"

function Home() {
  return (
    // jsx fragment
    <>
      <Header />
      <div className={style.home_container}>
       <DailyInfoCard />
       <RoomInfoCard />
      </div>
      <div className={style.action_btn}>
       <button>
        <AiOutlinePlus className="mr-2" />
        Start a Room
       </button>
        <button>
         <BsGrid3X3Gap />
       </button>
      </div>
    </>
  )
}

export default Home;
