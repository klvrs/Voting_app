
import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
const LeaderVotes = ()=> {
    const navigate=useNavigate()
    const[c,setC]=useState(false)
    const [enteredText, setEnteredText] = useState("");
    const textChangeHandler = (i) => {
      setEnteredText(i.target.value);
    };
    const [data, setData] = useState([])
   
    useEffect(()=>{ 
              axios.get('http://localhost:4000/VotesList')
        .then(res =>
          setData(res.data)
          )
        .catch(err => console.log(err))  
    }, [])

      
     
    const submitHandler = (event) => {
        const arr=data.map((user)=>{return user.name})
        console.log(arr)
        event.preventDefault()
        for(var i = 0; i < arr.length; i++) {
            console.log(i);
            if(arr[i] === enteredText) {
                axios.get('http://localhost:4000/VotesList',{params:{name:enteredText}})
                .then(res =>
                  setData(res.data))
                setC(true)
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
    return c?(
        <div className="bg-contain">
            <div className="col">
            <div className="row text-center">
                <h3><b>YOU HAVE GOT {data.length} VOTES</b></h3>
                </div>
                <div className="row text-center">
                    <div className="col-12 text-center">
                    <button onClick={(event)=> {
                      event.preventDefault()
                      alert("THANK YOU FOR VISITING!")
                      navigate(-2)
                  }} className='btn btn-gra btn-secondary mx-2' id=""><b>OK</b></button>
                    </div>  
            </div>
            </div>
        </div>
    )
        :
        (
        <div className="bg-contain">
          <div className='col'></div>
        <div className="col">
        <div className="row  text-center">
            <form onSubmit={submitHandler}>
            <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">FirstName</span>
              <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control" placeholder="enter your firstname to view the votes" type="text" name="rollno" value={enteredText} onChange={textChangeHandler} required></input>
        </div>
        
            <br></br>
                <button className='btn btn-gra btn-secondary mx-2' id=""><b>VIEW</b></button>
                </form> 
        </div>
        </div>
        <div className='col'></div>
    </div>
        );
    };

export default LeaderVotes