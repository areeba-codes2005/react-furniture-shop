import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-around">
          <h3 className="login-heading">LOG IN TO YOUR ACCOUNT</h3>
          <div className="col-12 col-md-8">
            <form id="msform">
              <fieldset>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="pass" placeholder="Password" />
                <input
                  type="button"
                  name="next"
                  class="sign-in-button"
                  value="Sign in"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
