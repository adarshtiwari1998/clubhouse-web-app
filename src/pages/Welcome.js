import React from 'react';
import style from "../style/welcome.module.css";

function Welcome() {
    return (
        <div className={style.WelcomeContainer}>
           <h1>Welcome!</h1>
           <div className={style.WelcomeInfo}>
               <p>We're working hard to get clubhouse ready for everyone while we wrap up the finishing touches , we're adding peope gradually to make sure nothing breaks.</p>
               <p>Anyone can join with an invite from an existing user or reserve your username and we'll text you if you have a friend on the app who can let you in. We are so grateful you're here and can't wait to have you join!</p>
               <p>Paul, Rohan & the Clubhouse team</p>
           </div>
        </div>
    )
}

export default Welcome;
