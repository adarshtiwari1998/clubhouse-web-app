import React from "react";
import style from "../style/header.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={style.Header}>
            <Link exact to="/explore">
                <img src="/images/search.png" alt="search bar image" />
            </Link>
            <div className={style.nav_items}>
                <Link exact to="/friends_invite">
                    <img src="/images/invite.png" alt="invite image" />
                </Link>
                <Link exact to="/upcoming">
                    <img src="/images/calendar.png" alt="calendar image" />
                </Link>
                <Link exact to="/activity">
                    <img src="/images/noti.png" alt="notifications image" />
                </Link>
                <Link exact to="/profile">
                    <img src="/images/user-img-me.png" alt="profile_image" />
                </Link>
            </div>
        </div>
    )
}

export default Header;
