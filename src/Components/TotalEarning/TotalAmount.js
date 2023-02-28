import './TotalAmount.css';
import React, { useContext, useState, useEffect } from 'react'
import { CredentialContext } from "../../App";
import CryptoJS from "crypto-js";

const API_BASE = "http://localhost:5000"

const TotalAmount = () => {
    const [credentials, setCredentials] = useContext(CredentialContext);

    const [data, setData] = useState({
        amount: "0",
        array: []
    })

    useEffect(() => {
        const secret = "hdahg g badhj yuida gdjhag dag jjh";
        const string = localStorage.getItem("user");
        if (string === null) return;
        let encryp = CryptoJS.AES.decrypt(string, secret).toString(CryptoJS.enc.Utf8);
        let data = JSON.parse(encryp);
        const email = data.email;
        const password = data.password;

        if (email !== null || password !== null) {
            setCredentials({ email, password });
        }
        else
            return

        fetch(API_BASE + "/arrays", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${email}:${password}`
            }
        })
            .then((res) => res.json())
            .then((data) => setData(data))

    }, [])

    return (
        <div id='teContainer'>
            <div className='Background'>
                <div id='te1Container'>
                    <div id='teLink'>
                        <div className='Earning'>
                            <p id='tep'>Total Earnings</p>
                            <p id='teprice'><i class="fa fa-rupee"></i>{data.amount}</p>
                        </div>
                        <div id='owall'><i class='fas fa-wallet' id='waIcon'></i></div>
                    </div>
                    <p id='temsg'>Earnings will show here within 72 hours of your shopping via FreeKaMaal.</p>
                    <div className='HomePageLink'>
                        <a href='/'><span>Go to home page</span></a>
                    </div>
                </div>
                <div id='order-container'>
                    {(data.array.length !== 0) && <h2 id='order-heading'>CLICK HISTORY</h2>}
                    {(data.array.length === 0) && <h2 id='order-heading'>No Click History</h2>}
                    <ul id='order'>
                        {data.array.map((todo, index) => (
                            <div key={index} id='order-link'>
                                <li id='txt' className='order-links'>Shopped at: {todo.text}</li>
                                <p id='day' className='order-links'>Clicked on: {todo.currDay}</p>
                                <button id='pending' className='order-links'>{todo.status}</button>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TotalAmount