import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
const UserSignUp = ()=>{
    const [inputData, setInputData] = useState({
       rollno: 0,
      name: '',
        email: '',
        branch:''
    })
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:4000/users', inputData)
        .then(()=>{
            alert('user created!!!')
            navigate(-1)
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="bg-container">
              <div>
                <form  onSubmit={handleSubmit} className="text-center p-3">
                        <div className="">
                            <div className="input-group input-group-lg">
                                <span className="input-group-text my-3" id="inputGroup-sizing-lg">ROLL NO</span>
                                <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control my-3" type="number" name="rollno"  onChange={(event) => setInputData({...inputData, rollno: event.target.value})} required></input>
                            </div>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text my-3" id="inputGroup-sizing-lg">Name</span>
                                <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control my-3" type="text" name="name"  onChange={(event) => setInputData({...inputData, name: event.target.value})} required></input>
                            </div>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text my-3" id="inputGroup-sizing-lg">Email</span>
                                <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control my-3" type="email" name="email"  onChange={(event) => setInputData({...inputData, email: event.target.value})} required></input>
                            </div>
                            <div className="input-group input-group-lg ">
                                <span className="input-group-text my-3" id="inputGroup-sizing-lg">Branch</span>
                                <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control my-3" type="text" name="branch"  onChange={(event) => setInputData({...inputData, branch: event.target.value})} required></input>
                            </div>
                        </div>
                        <div className=" row text-center">
                            <div className="col "></div>
                            <div className="col text-center" >
                                <button className='btn btn-success ' id="user"><b>Submit</b></button>
                            </div>  
                            <div className="col "></div>
                        </div> 
                </form>
              </div>
        </div>
    );
    }
export default UserSignUp