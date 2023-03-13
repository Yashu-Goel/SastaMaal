import React from "react";
import "./HowDoesItWork.css";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";

const HowDoesItWork = () => {
  const Data= [
    {
      heading: "How Paisa Bachao Works?",
      
    }
  ]
  return (
    <div id="HowDoesItWorkMainContainer">
      <h1>How Paisa Bachao Works?</h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>Login to your Paisa Bachao account </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Always check for Cashback Rates and other offer terms before making
            the transaction
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Click on offer card to be redirected to the retailer's site. Shop like you usually do.
            Always ensure you add products to your cart ONLY after going from
            Paisa Bachao.
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Your Cashback will track automatically in your Paisa Bachao account
            as Pending and you will receive payent after withdrawl request.
          </p>
        </li>
      </ul>
      <h1>How to Signup?</h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Go to <Link to="/">Home Page</Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Navigate to title bar and click on{" "}
            <Link to="/signup">Signup</Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Fill your details and click Signup button
          </p>
        </li>
      </ul>

      <h1>How to Login?</h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Go to <Link to="/">Home Page</Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Navigate to title bar and click on{" "}
            <Link to="/login">Login</Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Fill your details and click login button
          </p>
        </li>
      </ul>


      <h1>Unable to login / Forgot Password?</h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Go to <Link to="/login">Login Page</Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Click on Forgot Password
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Enter your registered Email ID
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Your will get the password on your registered email ID
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Use this password to login.
          </p>
        </li>
      </ul>

      <h1>Where to see your earning?</h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Go to <Link to="/">Home Page</Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Navigate to title bar and click on{" "}
            <Link to="/myearning">Total Earning </Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>You can request the Withdraw here.</p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            You can also check your Click History. Click History takes a record
            of clicks on your favorite brand.
          </p>
        </li>
      </ul>
      <h1>How much will I earn on referring a friend?</h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Every time your referral shops, you will get 10% of their
            Cashback/Rewards amount as Referral Earnings. Referral earnings will
            track as 'Pending Cashback' and will get Confirmed as soon as your
            Referral’s Cashback is Confirmed.
          </p>
        </li>
      </ul>

      <h1>How do I refer my friends?</h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Go to <Link to="/">Home Page</Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Navigate to the bottom of the webpage
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            You will see "Refer Friends & Earn Forever" component
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Fill your Name and Friend's Email className
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Click Send Button. The Email is send with your referral.
          </p>
        </li>
        <p>
          Every time your referral shops, you will get 10% of their Cashback/Rewards amount as Referral Earnings. Referral earnings will track as ‘Pending Cashback’ and will get Confirmed as soon as your Referral’s Cashback is Confirmed.
        </p>
      </ul>

      <h1>How to change your Personal Details</h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Go to <Link to="/setting">Settings</Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Here you will see your Name and Email className
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            To change your Name or Email className. Click on <i class="fas fa-edit"> {" "}</i>
            {" "}
            <Link /> icon
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Fill the details and click on verify changes
          </p>
        </li>
      </ul>

      <h1>How to see Payment History?</h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Go to <Link to="/setting">Settings</Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Click on Payment History button on top right corner
          </p>
        </li>
      </ul>



      <h1>How to get additional Support</h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Go to <Link to="/setting">Settings</Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Click on Support button on top right corner
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Fill Your Details and Click on Submit Button
          </p>
        </li>
      </ul>



      <h1>How to Connect with Us?</h1>
      <ul className="List1" >
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Go to <Link to="/">Home Page</Link>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Navigate to the bottom of the Home Page.
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            You will see our Linkedin and Github link. You  can connect through these Links.
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>

          <p>
            Don't Hesitate. We are waiting for your message 😉.
          </p>
        </li>
      </ul>



      <h1>Technology Used: </h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            React(Front-end) <span><Link to="https://reactjs.org/"><IoMdOpen /></Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Node.js and Express.js(Server) <span><Link to="https://expressjs.com/"><IoMdOpen /></Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            MongoDB(Database) <span><Link to="https://www.mongodb.com/"><IoMdOpen /></Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Client-Server Architecture <span><Link to="https://www.geeksforgeeks.org/client-server-model/"><IoMdOpen /></Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            JWT <span><Link to="https://www.npmjs.com/package/jsonwebtoken"><IoMdOpen /></Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Encoding and Decoding
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            Encryption
          </p>
        </li>



      </ul>


      <h1>Refrences: </h1>
      <ul className="List1">
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            <span><Link to="https://reactjs.org/">React</Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            <span><Link to="https://expressjs.com/">Express</Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            <span><Link to="https://www.mongodb.com/">MongoDB</Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            <span><Link to="https://www.geeksforgeeks.org/client-server-model/">Client-Server Architecture</Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            <span><Link to="https://www.npmjs.com/">NPM</Link></span>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            <span><Link to="https://stackoverflow.com/">Stack overflow</Link></span>
          </p>
        </li>
        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            <span><Link to="https://www.youtube.com/">YouTube</Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            <span><Link to="https://cashkaro.com/">Cash karo</Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            <span><Link to="https://pouringpounds.com/">Pouring Pounds</Link></span>
          </p>
        </li>

        <li>
          <span>
            <BsFillArrowRightCircleFill />
          </span>
          <p>
            <span><Link to="https://earnkaro.com/">Earn Karo</Link></span>
          </p>
        </li>
      </ul>
      <button id="button"><Link to='/'><span>Go to home page </span></Link></button>
    </div>
  );
};

export default HowDoesItWork;
