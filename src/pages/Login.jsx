import React, { useState, useContext } from "react";
import Button from "../components/Button";
import SvgComponent from "../components/SvgComponent";
import { useNavigate } from "react-router-dom";
import payuLogo from "../hack@payu.png"
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showLoginUserName, setShowLoginUserName] = useState(false);
  const [userName, SetUserName] = useState("");


  const handleClick = async (purpose) => {
    if (purpose === "login") {
      dispatch({ type: "LOGIN", payload: userName });
      navigate("/");
    }
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginContainerContent">
          <img src={payuLogo} />
          <h1>Welcome to Offer Engine</h1>
          <p>Your Ultimate Offer AI Assistant</p>
          <div className="loginButtonWrapper">
            {showLoginUserName ? (
              <>
                <input className="userName" placeholder="Enter Merchant ID" onChange={(e) => SetUserName(e.target.value)} />
                <Button text="Proceed" handleClick={() => handleClick("login")} />
              </>
            ) : <Button text="Log in" handleClick={() => setShowLoginUserName(true)} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
