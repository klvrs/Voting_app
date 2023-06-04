import { Link } from "react-router-dom";
import { useState } from "react";
const Admin = () => {
  const [enteredText, setEnteredText] = useState("");

  const textChangeHandler = (i) => {
    setEnteredText(i.target.value);
  };
  const [btn, setBtn] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredText);
    if (enteredText === "Sasthi") {
      alert("Welcome Sasthi!!!, Please select the one u wish to see!");
      setBtn(false);

      console.log(btn);
    } else {
      alert("please enter valid id");
      setEnteredText("");
    }
  };
  return btn ?( 
    <div className="bg-container">
    <div className="row">
      <div className="col" id="ul">
        <div className="text-center">
        <form onSubmit={submitHandler} className="">
              <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">KEY</span>
              <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control" placeholder="enter valid key" type="text" name="rollno" value={enteredText} onChange={textChangeHandler} required></input>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className=" col text-end">
              <button className="btn btn-secondary m-3 text-center" id="leader"><b>LOGIN</b></button>
              </div>
              <div className="col"></div>
              </div>
            </form>
        </div>
      </div>
      <div className="col" id="ul" >
          <img alt="img" src={require("./Images/admin.webp")} id="img"></img>
      </div>
    </div>
  </div>
  ) : (
    <div className="bg-container">

      <div className="row">
      <div className="col" id="ul">
        <div className="text-center">
        <div>
        <h3 m-25><b>Click on what you want to see</b></h3>
      </div>

      <div>
        <Link to="adminuser" className="btn btn-success m-3" id="user">
          <b>USERS</b>
        </Link>
        <Link to="adminleader" className="btn btn-success m-3" id="user">
          <b>LEADERS</b>
        </Link>
      </div>
        </div>
      </div>
      <div className="col" id="ul" >
          <img alt="img" src={require("./Images/admin.webp")} id="img"></img>
      </div>
    </div>
    </div>
  );
};
export default Admin;
