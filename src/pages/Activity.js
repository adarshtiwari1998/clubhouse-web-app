import React from 'react';
import style from "../style/activity.module.css";
import exploreStyle from "../style/explore.module.css";
import { CalendarOutlined } from "@ant-design/icons";
import profilestyle from "../style/profile.module.css";
import {Link} from "react-router-dom";
// import {data} from "../Data/activity.json"
import SubHeader from "../Components/SubHeader";

function Explore() {
    // const data = Data;
    return (
        <div className={style.activityContainer}>
         <div className={`${exploreStyle.exploreheader} bg-white`}>
            {/* given a classname using the template literal */}
            <div className={`${exploreStyle.exploreSubHeader} text-right mb-0`}> 
             <Link to="/home">
                 <img src="./images/arrow.png" alt="" className={exploreStyle.arrow_icon} />
             </Link>
            <div className="align-items-center">
            <SubHeader pageTitle="Explore" className="text-center" />
              <div className={`${profilestyle.actionBtn}`}>
               <CalendarOutlined/>
              </div>
            </div>
           </div>   
       </div>
            {/* <div className="row mx-0 ">
                {conversation.map((item) => (
                    <div className="col-6 px-2 mb-3">
                        <div className={style.conversationalCard}>
                          <h6>
                              <FireOutlined /> 
                              {item.title}
                          </h6>
                          <p>
                          {item.description}
                          </p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default Explore
