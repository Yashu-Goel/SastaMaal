import React, { useState } from 'react'
import './TopCashbackStoresCard.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'react-toastify';
const API_BASE = "http://localhost:5000";

const TopCashbackStoresCard = (props) => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState(false);
    // const []

    
    const string = localStorage.getItem("profile");
    const onClickHandler = async (e) => {

        if (string === null) {
            toast.error("Oops Session expired. Login again..");
            navigate("/login");
        }


        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        const currDay = today.toLocaleDateString("de-DE") + " at " + h + ":" + m + " hrs.";

        // axios.get(API_BASE + "/click", {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `Basic ${string}`
        //     }
        // })
        //     .then((res) => {
        //         setCredentials(true);
        //     })
        //     .catch((error) => toast.error("Session expired"),
        //         setTimeout(() => {
        //             navigate("/login");
        //         }, 2500)
        //     );


        await axios.post(API_BASE + "/click", {

            headers: {
                "Content-Type": "application/json"
            },
            body:({
                store: props.BrandName, id: props.id, offerid: props.Cashback, currDay: currDay, token: string
            })
        })
            .then((res) => {
                toast.success("Your click was recorded successfully...");
                setCredentials(true);
            })
            .catch((error) => toast.error(error.response.data.message));
    }

    return (
        <div className='MainContainer1'>
            <Link to={string ? props.Link : "#"} className='AnchorContainer' target={string && '_blank'} rel="noreferrer" onClick={onClickHandler}>
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
            </Link>
        </div>
    )
}

export default TopCashbackStoresCard