
import React, { useEffect, useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Leader = ()=>{
  const navigate=useNavigate()

  const [enteredText, setEnteredText] = useState("");
  const textChangeHandler = (i) => {
    setEnteredText(i.target.value);
  };
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/leaders')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
}, [])


const submitHandler = (event) => {
    const arr=data.map((user)=>{return user.id})
    console.log(arr)
    event.preventDefault()
    for(var i = 0; i < arr.length; i++) {
        console.log(i);
        if(arr[i] === enteredText) {
            alert("Hlo Leader");
            navigate(`leadervotes`);
            break
        }
    }
    for(var j = 0; j < arr.length; j++) {
        console.log(i);
        if(arr[i] !== enteredText){
            alert("INVALID")
        setEnteredText("");
        break
        }
        
    }

    
}

   
    return(
        <div className='bg-container'>
        <div className="row">
          <div className="col" id="ul">
            <div className="text-center">
            <form onSubmit={submitHandler} className="">
              <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">ID</span>
              <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control" placeholder="enter your ID" type="text" name="rollno" value={enteredText} onChange={textChangeHandler} required></input>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className=" col text-end">
              <button className="btn btn-secondary m-3 text-center" id="leader"><b>LOGIN</b></button>
              </div>
              <div className="col"></div>
              <Link to="leadersignup" className="text-center">
                Want to be a Leader? click here to Register!
              </Link>
              </div>
            </form>
            </div>
          </div>
          <div className="col" id="ul" >
              <img alt="img" src={require("./Images/leader.jpg")} id="img"></img>
          </div>
        </div>
      </div>
    );
    }
export default Leader