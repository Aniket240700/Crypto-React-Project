import React from "react";
import Crypto from "../images/trade.png";

function SignUp() {
  return (
    <div className="signup">
      <div className="container">
        <div className="left">
          <img
            src={Crypto}
            alt="trade"
            style={{
              maxWidth: "80%",
              margin: "auto",
            }}
          />
        </div>

        <div className="right">
          <h2>Earn passive income with crypto.</h2>
          <p style={{ marginTop: "25px" }}>
            Earn upto 12% annual rewards on 30+ digital assests. Simply hold
            your assets in the app to automatically earn rewards at the end of
            each month with no lockups and no limits.
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter you email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
