import React from "react";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import {Link} from "react-router-dom";
import {BsAt, BsUpload, BsPlus} from "react-icons/bs";
import {AiOutlineSetting, AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin} from "react-icons/ai";
 function Profile() {
     return (
      <>
      <div className={style.profileContainer}>
       <div className={exploreStyle.exploreheader}>
            {/* given a classname using the template literal */}
            <div className={`${exploreStyle.exploreSubHeader} text-right mb-0`}> 
             <Link to="/home">
                 <img src="./images/arrow.png" alt="" className={exploreStyle.arrow_icon} />
             </Link>
              <div className={style.actionBtn}>
                <BsAt />
                <BsUpload />
                <AiOutlineSetting />
              </div>
           </div>   
       </div>
       <img src="./images/user-img-me.png" alt="" className={style.profile_img}/>
       <h4>Adarsh Tripathi</h4>
       <p>@AdarshTripathi1998</p>
       <div className={style.followSec}>
           <p>
               <span>43</span> Followers
           </p>
           <p>
               <span>51</span> Following
           </p>
       </div>
       <button>Add a Bio</button>
       <div className="mb-4">
        <button className="mb-0">
        <AiOutlineTwitter /> Add Twitter
        </button>
        <button className="mb-0">
        <AiOutlineInstagram /> Add Instagram
        </button>
        <button className="mb-0">
        <AiOutlineLinkedin /> Add Linkedin
        </button>
       </div>
       <div className={style.nominatedNameSec}>
        <img src="./images/user-img-me.png" alt=""/>
        <div>
            <p>Joined 08-Aug 2020</p>
            <p>Nominated By <span>Elon Musk</span></p>
        </div>
       </div>
       <p>Members of</p>
       <button className={style.addMembersBtn}>
           <BsPlus />
       </button>
      </div>
      </>
     )
 }

 export default Profile;