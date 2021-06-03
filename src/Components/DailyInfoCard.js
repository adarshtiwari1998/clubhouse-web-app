import React from 'react';
import style from "../style/dailyInfoCard.module.css"
import Data from "../Data/DailyCard.json";

function DailyInfoCard() {
    console.log(Data[0].title)
    return (
        <div className={style.daily_Card}>
            {/* looping here */}
            {Data.map((item) => {
                return (
                    <div>
                        <span className="">{item.time}</span>
                        <div>
                            <span className="">{item.title}</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default DailyInfoCard;
