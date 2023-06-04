import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Images/leader.jpg'
const User = () => {
  const navigate = useNavigate();
  const [enteredText, setEnteredText] = useState("");
  const textChangeHandler = (i) => {
    setEnteredText(i.target.value);
  };
  const [data, setData] = useState([]);
 

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data)
 
 
  const submitHandler = (event) => {
    const arr = data.map((user) => {
      return user.rollno;
    });
    
    console.log(arr);
    
    event.preventDefault();
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i])
      if (arr[i] === enteredText) {
                alert("Hlo User! Ready to caste your vote!");
                navigate(`uservote`);
                  break;
              }
            }
    for(var j=0;j<arr.length;j++){
      if (arr[i] !== enteredText) {
        alert("INVALID");
        setEnteredText("");
        break;
      }
    }

    
  }

  return (
  
    <div class="bg-container">
      <div className="row">
      <div className="col" id="ul" >
              <img alt="img" src={require("./Images/govote.jpg")} id="img"></img>
          </div>
        <div className="col" id="ul">
          <div className="text-center">
            <form onSubmit={submitHandler} className="">
              <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">ROLL NO</span>
              <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control" placeholder="enter roll no" type="text" name="rollno" value={enteredText} onChange={textChangeHandler} required></input>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className=" col text-end">
              <button className="btn btn-secondary m-3 text-center" id="leader"><b>LOGIN</b></button>
              </div>
              <div className="col"></div>
              <Link to="usersignup" className="text-center">
                Not a user? click here to SignUp!
              </Link>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default User;
