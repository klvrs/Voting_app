import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios  from "axios";

const LeaderSignUp = ()=>{
    const [inputDate, setInputData] = useState({
        firstname: '',
        lastname: '',
        id:0,
        symbol: ''    
    })
    const navigate=useNavigate()
    const handleSubmit =(event)=>{
        event.preventDefault()
        axios.post('http://localhost:4000/leaders',inputDate)
        .then(()=>{
            alert('Leader added!!!')
            navigate(-1)
        })
        .catch(err=>console.log(err))
    }
    return(
        <div className="bg-container">
           <div>
           <form  onSubmit={handleSubmit} className="text-center p-3">
                        <div className="">
                            <div className="input-group input-group-lg">
                                <span className="input-group-text my-3" id="inputGroup-sizing-lg">FIRST NAME</span>
                                <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control my-3" type="text" name="firstname"  onChange={(event) => setInputData({...inputDate, firstname: event.target.value})} required></input>
                            </div>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text my-3" id="inputGroup-sizing-lg">LAST NAME</span>
                                <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control my-3" type="text" name="lastname"  onChange={(event) => setInputData({...inputDate, lastname: event.target.value})} required></input>
                            </div>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text my-3" id="inputGroup-sizing-lg">ID</span>
                                <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control my-3" type="number" name="id"  onChange={(event) => setInputData({...inputDate, id: event.target.value})} required></input>
                            </div>
                            <div className="input-group input-group-lg ">
                                <span className="input-group-text my-3" id="inputGroup-sizing-lg">SYMBOL</span>
                                <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" className="form-control my-3" type="url" name="symbol"  onChange={(event) => setInputData({...inputDate, symbol: event.target.value})} required></input>
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
export default LeaderSignUp