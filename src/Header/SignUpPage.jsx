import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUpPage = () => {
  const dataCollect = async () => {
    console.log(name, email, address, mobile, date, dob);
    let result = await fetch("http://localhost:8003/register", {
      method: "post",
      body: JSON.stringify({ name, email, address, mobile, date, dob }),
      headers: { "content-type": "application/json" },
    });
    result = await result.json();
    console.log(result);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [dob, setDob] = useState("");
  return (
    <form method="post" action="/Home">
      <div className="signup">
        <div className="singupinside">
          <label htmlFor="Name">Enter Name</label>
          <br />
          <input
            className="textarea"
            type="text"
            placeholder="Enter First Name"
            required=""
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="Email">Enter Your E-mail</label>
          <br />
          <input
            className="textarea"
            type="email"
            placeholder="Enter Your E-mail"
            required=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="Address">Enter Your Address</label>
          <br />
          <input
            className="textarea"
            type="text"
            placeholder="Enter Address"
            required=""
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <br />
          <label htmlFor="mobile">Enter Mobile Number</label>
          <br />
          <input
            className="textarea"
            type="tel"
            placeholder="Enter mobile Number"
            required=""
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          <br />
          <label htmlFor="sign-in">Enter sign-in date</label>
          <br />
          <input
            className="textarea"
            type="date"
            placeholder=""
            required=""
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <br />
          <label htmlFor="sign-in">Date Of Birth</label>
          <br />
          <input
            className="textarea"
            type="date"
            placeholder=""
            required=""
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />

          <br />

          <Link to="/Home" className="nav-link px-2 text-danger">
            <button onClick={dataCollect} className="signbutton">
              Submit
            </button>
          </Link>

          
          
        </div>
      </div>
    </form>
  );
};
export default SignUpPage;
