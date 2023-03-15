import './TotalAmount.css';
import React, { useState, useEffect } from 'react'
import MyModel from './Modals/Modals';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const API_BASE = "https://calm-ruby-hare-cape.cyclic.app"

const TotalAmount = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        amount: "0",
        array: []
    })
    const [show, setShow] = useState(false);

    function withHandler() {

        if (show === true) {
            setShow(false);
            return;
        }

        if (data.amount < 200) {
            toast.error("₹200 (min. amount required)");
            return;
        }

        setShow(true);
    }

    useEffect(() => {

        const string = localStorage.getItem("profile");

        if (string === null) {
            toast.error("Session Expired Redirecting to login page....");

            setTimeout(() => {
                navigate("/login");
            }, 2500)
        }

        axios.get(API_BASE + "/arrays", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${string}`
            }
        })
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => console.log("Not loginned"));

    })


    return (
        <>
            <div id='teContainer'>
                <div className='Background'>
                    <div id='te1Container'>
                        <div id='teLink'>
                            <div className='Earning'>
                                <p id='tep'>Total Earnings</p>
                                <p id='teprice'><i class="fa fa-rupee"></i> {data.amount}</p>
                            </div>
                            <div id='owall'><i class='fas fa-wallet' id='waIcon'></i></div>
                        </div>
                        <p id='temsg'>Earnings will show here within 72 hours of your shopping via FreeKaMaal.</p>
                        <div class='btns-earn'>

                            <div className='HomePageLink'>
                                {<Link to='#' className='btn-with' onClick={withHandler}><span>Withdraw</span></Link>}
                            </div>
                            <div className='HomePageLink'>
                                <Link to='/' className='btn-home'><span>Go to home page</span></Link>
                            </div>
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
            <ToastContainer position='top-center' />
            {show && <MyModel withHandler={withHandler} amount={data.amount} />}
        </>
    )
}

export default TotalAmount