import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "../style/phoneConfirmation.module.css";
import PhoneInput from 'react-phone-number-input';


function PhoneConfirmations() {
    const [value, setValue] = useState()

    return (
        <div className={style.phoneConfirmationContainer}>
         <Link exact to="/" className={style.backBtn}>
            <img src="/images/arrow.png" alt="" />
         </Link>
         <h1 className="mb-2">Enter Your Phone Number</h1>
         <PhoneInput className={style.phone_input_field}
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
         <Link exact to="/code_confirm" className="primaryBtn d-flex align-items-center place-items-center">
           Next <img src="/images/nextArrowIcon.svg" className="ml-1" alt="" />
         </Link>
        </div>
    );
}

export default PhoneConfirmations
