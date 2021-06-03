import React from "react";
import DailyInfoCard from "../Components/DailyInfoCard";
import Header from "../Components/Header";
import RoomInfoCard from "../Components/RoomInfoCard";
import style from "../style/home.module.css";

function Home() {
  return (
    // jsx fragment
    <>
      <Header />
      <div className={style.home_container}>
       <DailyInfoCard />
       <RoomInfoCard />
      </div>
    </>
  )
}

export default Home;
