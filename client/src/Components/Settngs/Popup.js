import React, { useState } from 'react'
import './Popup.css'
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:5000";


const Popup = () => {
    
    const navigate = useNavigate();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const [isError, setIsError] = useState("");
    
    function backHandler(e){
        navigate(-2)
    }

    function nameHandler (e){
        setIsError("");
        const {value} = e.target;
        setName(value);
    }
    function emailHandler (e){
        setIsError("");
        const {value} = e.target;
        setEmail(value);
    }
    function passHandler (e){
        setIsError("");
        const {value} = e.target;
        setPass(value);
    }
    const handleErrors = async (res) => {
        if (!res.ok) {
            const { message } = await res.json();
            throw Error(message);
        }else if(res.ok){
            const { message } = await res.json();
            throw Error(message);
        }
        return res.json();
    }

    const submitHandler = async (e)=>{
        e.preventDefault();

        await fetch(API_BASE + "/edit-name", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email, password: pass,name:name
            })
        })
        .then(handleErrors)
        .catch((error) => {
          setIsError(error.message);
        })
    }
    return  (
        <div className='edit-pop'>
            <form method='post' className='edit-form' onSubmit={submitHandler}>
                <div>
                    <label>Enter the new Name:</label>
                    <br />
                    <input type='text' placeholder='Enter the new name' required onChange={nameHandler} />
                </div>
                <div>
                    <label>Enter the email id:</label>
                    <br />
                    <input type='email' placeholder='Enter you email id' required onChange={emailHandler}  />
                </div>
                <div>
                    <label>Enter the password:</label>
                    <br />
                    <input type='password' placeholder='Enter the password' required onChange={passHandler} />
                </div>
               {!isError && <input type='submit' value='Verify Changes'></input>}
               {(isError === "Changes Saved Successfully") && <><p className='success-edit'>&#9989;{isError}</p></>}
               {(isError!== "" && isError !== "Changes Saved Successfully") && <p className='success-fail'>&#10060;{isError}</p>}
            </form>
               <button onClick={() => navigate(-2)} id='backbtn'>Go Back</button>
        </div>
    )
}

export default Popup;


// import React from "react";
 
// const Popup = props => {
//   return (
//     <div className="popup-box">
//       <div className="box">
//         <span className="close-icon" onClick={props.handleClose}>x</span>
//         {props.content}
//       </div>
//     </div>
//   );
// };
 
// export default Popup;