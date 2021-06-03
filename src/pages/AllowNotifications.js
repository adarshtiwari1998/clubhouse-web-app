import React from "react";
import style from "../style/phoneConfirmation.module.css";
import { Link } from "react-router-dom";

function AllowNotifications() {
  return (
    <div className={style.phoneConfirmationContainer}>
      <div className="text-center">
        <h1 className="mb-4">Last, important step!</h1>
        <h1 className="mb-3">Enable Notifications to know when people are speaking or talking</h1>
        <div className={style.notificationContainer}>
          <div className="p-3">
            <h3>"clubhouse" would like to send notifications</h3>
            <p>notifications may include alerts, sounds and icons badges</p>
          </div>
          <div className={style.notification_action_btn}>
            <Link exact to="/home">
              Don't Allow
              </Link>
            <Link exact to="/home">
              Allow
              </Link>
            <img src="/images/handIcon.svg" alt="" className={style.hand_icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllowNotifications;
