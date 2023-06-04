import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckToSlot} from '@fortawesome/free-solid-svg-icons'
import Btndis from "./Btndis";
const UserVote = ()=>{
   const element= <FontAwesomeIcon icon={faCheckToSlot} size="2xl" />
   
    const[btn,setBtn]=useState(false)
    const [data, setData] = useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:4000/leaders?_sort=firstname')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    
    function onVote(ids,name){ 
        
        if (window.confirm("Thanks for voting! Want to change your vote?") === true) {
            setBtn(false) 
        }
        else {
            axios.post('http://localhost:4000/VotesList',{name:name})
            .then(res=>{ 
                alert("vote is added")
            })
            .catch(err => console.log(err))
            setBtn(true)
        }
    }
    return(
        <div className="" id="aul">
            <div className='col p-5 mx-5'>
                <table className='table '>
                    <thead>
                        <tr>
                            <th><h3><b>LeaderName</b></h3></th>
                            <th><h3><b>LeaderSymbol</b></h3></th>
                            <th><h3><b>VOTE</b></h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((leaders)=>{
                                return <tr>
                                            <td className="m-2" ><h5 className="my-5 mx-2">{leaders.firstname}{leaders.lastname}</h5></td>
                                            
                                            <td><img id="i" className="mx-5 my-3" src={leaders.symbol} alt="img"></img></td>
                                             {
                                                !btn?
                                                <td>  <button className="my-5 mx-2" onClick={()=>onVote(leaders.id,leaders.firstname)} >{element}</button> </td>
                                                :
                                                <td><Btndis></Btndis></td>
                                             }
                                            
                                            
                                        </tr>
                                       
                           })
                        }
                    </tbody>
                </table>
                <div className=" row text-center">
                    <div className="col-12 text-center">
                <button onClick={(event)=> {
                              event.preventDefault()
                              alert("Congratulations you have casted your vote")
                              navigate('/')
                          }} className='btn btn-gra btn-secondary mx-2' id=""><b>Submit</b></button>
                </div>
                </div>
                
            </div>
        </div>
                
              
    );
   } 
export default UserVote