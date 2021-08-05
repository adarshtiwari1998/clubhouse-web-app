import React from 'react';
import style from "../style/explore.module.css";
import {DownOutlined, FireOurlined} from "@ant-design/icons";
import data from "../Data/exploreData.json"

function Explore() {
    const {people, conversation} = data;
    return (
        <div className={style.exploreContainer}>
            <h5>PEOPLE TO FOLLOW </h5>
            <div className={style.peopleContainer}>
              {people.map((item) => (
                  <div>
                     <div className="d-flex align-items-center">
                        <img src="./images/user-img-me.png" alt="" />
                        <div className="ml-2">
                         <h5>{item.title}</h5>
                         <p>{item.description}</p>
                        </div>
                     </div>
                     <button>Follow</button>
                  </div>
              ))} 
              <button className={style.showMore}>
                  Show More People <DownOutlined />
              </button>
            </div>
        </div>
    )
}

export default Explore
