import React from 'react';
import style from "../style/explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import {Input} from "antd";
import data from "../Data/exploreData.json"

function Explore() {
    const { people, conversation } = data;
    return (
        <div className={style.exploreContainer}>
            {/* mainheader */}
            <div className={style.exploreheader}>
              {/* subheader */}
              <Input style={{
               backgroundColor: "#f4f4f4",
               borderRadius: "0.9em",
               outline: "none",
               padding: "0.3em 1em",
               border: "none",
               boxShadow: "none"
            }} 
             size="large"
             placeholder="Find People and Clubs on Clubhouse Chat..."
             prefix={<img src="./images/search.png" alt="" width="15px" />}
            ></Input>
            </div>
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
            <h6>Find Conversations About...</h6>
            <div className="row mx-0 ">
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
            </div>
        </div>
    );
}

export default Explore
