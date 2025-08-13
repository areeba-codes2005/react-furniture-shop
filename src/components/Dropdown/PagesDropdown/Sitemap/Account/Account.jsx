import React from "react";
import "./Account.css";

const Account = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-around">
          <h3 className="account-heading">CREATE AN ACCOUNT</h3>
          <div className="col-12 col-md-8">
            <form id="acct-form">
              <p className="account-title">
                Already have an account? Log in instead!
              </p>
              <div>
                <label for="socialTitle">Social title:</label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    className="form-check-input"
                    value="optionOne"
                  />
                  Mr.
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    className="form-check-input"
                    value="optionTwo"
                  />
                  Mrs.
                </label>
              </div>
              <div className="form-group">
                <label for="firstName">First name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  id="firstName"
                />
              </div>
              <div className="form-group">
                <label for="lastName">Last name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  id="lastName"
                />
              </div>
              <div className="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@email.com"
                  id="email"
                  required
                />
              </div>
              <div className="form-group">
                <label for="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                />
              </div>
              <label>Birthday:</label>
              <div className="form-group">
                <label for="birthdayDay" className="sr-only">
                  Birthday day
                </label>
                <select className="form-control" id="birthdayDay">
                  <option vaule="">Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>
              <div className="form-group">
                <label for="birthdayMonth" className="sr-only">
                  Birthday month
                </label>
                <select className="form-control" id="birthdayMonth">
                  <option value="">Month</option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
              </div>
              <div className="form-group">
                <label for="birthdayYear" className="sr-only">
                  Birthday year
                </label>
                <select className="form-control" id="birthdayYear">
                  <option value="1980">1980</option>
                  <option value="1981">1981</option>
                  <option value="1982">1982</option>
                  <option value="1983">1983</option>
                  <option value="1984">1984</option>
                  <option value="1985">1985</option>
                  <option value="1986">1986</option>
                  <option value="1987">1987</option>
                  <option value="1988">1988</option>
                  <option value="1989">1989</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                </select>
              </div>
              <div className="d-flex flex-column">
                <button type="submit" className="save-btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
