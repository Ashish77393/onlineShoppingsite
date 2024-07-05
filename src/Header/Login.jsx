import { useState } from "react";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const loginbutton = async() => {
    console.log(email, password);
    let result = await fetch("http://localhost:8003/name", {
        method: "get",
        body: JSON.stringify({name,email}),
        headers: { "content-type": "application/json" },
      });
      result = await result.json();
    if(result==true){
      <Link to="/Home" className="nav-link px-2 text-danger"/>
    }else{
      <p>email id and password does not match</p>
    }
    };
  return (
    <form>
      <div className="LoginPage">
        <div className="loginform">
          <h1 className="loginHead">Login Page</h1>
          <label htmlFor="Name">Enter User Name</label>
          <br></br>
          <input
            className="textarea"
            type="text"
            required=""
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            placeholder="Enter User Name"
          ></input>
          <br></br>
          <label htmlFor="Name">Enter Password</label>
          <br></br>
          <input
            className="textarea"
            type="password"
            required=""
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="Enter User Password"
          ></input>
          <br></br>
          
         
          <br></br>
          <button className="loginbutton" onClick={loginbutton}>Submit</button>
        </div>
      </div>
    </form>
  );
};
export default Login;
