import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "../style/phoneConfirmation.module.css";
import PhoneInput from 'react-phone-number-input'

function PhoneConfirmations() {
    const [value, setValue] = useState()

    return (
        <div className={style.phoneConfirmationContainer}>
         <Link exact to="/" className={style.backBtn}>
             
         </Link>
         <h1>Enter Your Phone Number</h1>
         <PhoneInput 
         defaultCountry="IN"
         international
         placeholder="Enter phone number"
         value={value}
         onChange={setValue}
         />
         <p>By Entering your number, you're agreeing to our{""}
        <span> Terms of Services and Privacy Policy. </span>
            Thanks!
         </p>
        </div>
    )
}

export default PhoneConfirmations
