import React from 'react'
import './ResetModal.css'

const API_BASE = "https://calm-ruby-hare-cape.cyclic.app";

const ResetModal = ({closeResetModal}) => {
    return (
        <>
            <div className='outer-outer-support'>
                <div className='outer-support'>
                    <button onClick={closeResetModal} className='close-button'>x</button>
                    <div className="sup-container">
                        <h1 className='sup-head'>Reset Password</h1>
                        <form id="contact-form" >
                            <div className="form-group">
                                <label htmlFor="password">Current Password</label><br />
                                <input type="password" className="form-control"  placeholder='Current Password' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="newpassword">New Password</label>
                                <br />
                                <input type="password" className="form-control" placeholder='Password'  required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <br />
                                <input type="password" className="form-control" placeholder='Confirm Password'  required />
                            </div>
                            <button type="submit" className="sup-btn" >Submit</button>
                            {/* {(isError === "Changes Saved Successfully") && <p className='sup-success'>&#9989;{isError}</p>} */}
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default ResetModal