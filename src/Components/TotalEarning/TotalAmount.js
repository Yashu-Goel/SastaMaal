import React from 'react'
import './TotalAmount.css';
const TotalAmount = () => {
    
    return (
        <div id='teContainer'>
            <div id='te1Container'>
                <div id='teLink'>
                    <p id='tep'>Total Earnings</p>
                    <p id='teprice'><i class="fa fa-rupee"></i>1500.10</p>
                    <div id='owall'><i class='fas fa-wallet' id='waIcon'></i></div>
                </div>
                <p id='temsg'>Earnings will show here within 72 hours of your shopping via CashKaro.</p>
            </div>
            <div id='teBottom'>
                <div className='tegrid'>My Order Details</div>
                <div className='tegrid'>Request Payment</div>
                <div className='tegrid'>Get Help</div>
            </div>
        </div>
    )
}

export default TotalAmount