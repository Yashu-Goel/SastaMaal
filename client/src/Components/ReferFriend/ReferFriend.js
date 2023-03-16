import React, { useRef, useState } from "react";
import './ReferFriend.css'
import emailjs from "@emailjs/browser";
const ReferFriend = () => {
  const form = useRef();
  const [message, setMessage]=useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_leo967y",
        "template_tsa93ce",
        form.current,
        "vEkM6tVoOo75PkBI6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Email Sent")
        },
        (error) => {
          console.log(error.text);
          setMessage(error);
        }
      );
    e.target.reset();
  };

  return (
    <div className="ReferFriendMainContainer">
        <div>
            <span>Refer Friends & Earn Forever</span>
        </div>
        <div>
            <p>Get 10% Extra on Every Product💰</p>
        </div>
        <div className="FormContainer">
        <form ref={form} onSubmit={sendEmail}>
        <label className="rflabel">Your Name</label>
        <input type="text" name="name" placeholder="Enter Your Name" className="InputContainer"/>
        <label className="rflabel">Your Friend's Email</label>
        <input type="email" name="email" className="InputContainer" placeholder="example@xyz.com"/>
        <input type="submit" value="Send"  className="SubmitButton"/>
        </form>
        <div className="MessageContainer">
            <span>{message}</span>
        </div>
        </div>
      
    </div>
  );
};

export default ReferFriend;
