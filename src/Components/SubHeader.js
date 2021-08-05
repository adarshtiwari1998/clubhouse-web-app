import React from "react";
import style from "../style/explore.module.css";
import {Link} from "react-router-dom";

// function SubHeader({pageTitle}) {  //this is called diconstructor of page title like props 
    function SubHeader(props) {  /* but props are easier you can give n number of arguments with passing props
    */
      return (
      <div className={style.exploreSubHeader}>
        <Link to="/home" >
            <img src="./images/arrow.png" />
        </Link>
        <h3>{props.pageTitle}</h3>
      </div>
      );
}

export default SubHeader;