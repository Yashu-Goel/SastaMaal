import React, { useContext } from 'react'
import './TopCashbackStoresCard.css'
import { CredentialContext } from "../../App";
import CryptoJS from "crypto-js";
import { Navigate } from 'react-router-dom';
const API_BASE = "http://localhost:5000";

const TopCashbackStoresCard = (props) => {

    // const [credentials, setCredentials] = useContext(CredentialContext);

    let email = null;
    let password = null;
    const secret = "hdahg g badhj yuida gdjhag dag jjh";
    const string = localStorage.getItem("user");
    if (string !== null) {
        let encryp = CryptoJS.AES.decrypt(string, secret).toString(CryptoJS.enc.Utf8);
        let data = JSON.parse(encryp);
        email = data.email;
        password = data.password;
    }
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    const currDay = today.toLocaleDateString("de-DE") + " at " + h + ":" + m + " hrs.";
    
    const onClickHandler = async (e) => {

        if (string === null) {
            alert("Please Login or Signup before proceeding to any merchant website");
            return;
        }


        await fetch(API_BASE + "/click", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                store:props.BrandName,email: email, password: password, id: props.id, offerid: props.Cashback, currDay:currDay
            })
        })
    }
    return (
        <div className='MainContainer1'>
            <a href={string ? "https://www.amazon.in/" : "#"} className='AnchorContainer' target={string && '_blank'} rel="noreferrer" onClick={onClickHandler}>
                <div className='ImageContainer'>
                    <p>{props.Offer}</p>
                    <img src={props.ImageSrc} alt='offers' />
                </div>
                <div className='CashbackContainer'>
                    <p>
                        EARN {props.Cashback}% CASHBACK NOW &#9654;
                    </p>
                </div>
                <div className='TermsContainer'>
                    <p>Cashback Rates & Terms</p>
                </div>
            </a>

        </div>
    )
}

export default TopCashbackStoresCard