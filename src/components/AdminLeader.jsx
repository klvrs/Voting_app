import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRotateRight,faArrowUpShortWide,faArrowLeft,faHouse,faUserPlus,faUserMinus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './style.css';
const AdminLeader =()=>{
    const [data, setData] = useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:4000/leaders?_sort=firstname')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    const sortById = () => {
        axios.get('http://localhost:4000/leaders?_sort=id')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }

    const resetHandle = () => {
        axios.get('http://localhost:4000/leaders?_sort=firstname')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        
        const confirm = window.confirm('Do you want to delete the leader?')
        if(confirm) {
            axios.delete('http://localhost:4000/leaders/'+id)
            .then(res=>{
                alert('leader has been deleted!!!')
            })
            .catch(err => console.log(err))
        }
    }

  return (
    <div className='container'>
        <div className='col' id="aul">
        <div className='row p-5'>
            <div className='col-12 border rounded d-flex'>
                <div className='container'>
                    <div className='row p-2'>
                        <div className='col-6'>
                            <h1>All Leaders List</h1>
                        </div>
                        <div className='col-6 text-end pt-2'>
                        <Link to= "adminleadersignup" className='btn btn-success text-end'><FontAwesomeIcon icon={faUserPlus} size='2xl'/></Link>
                            
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-12 text-center py-2'>
                            <button onClick={ sortById } className='btn btn-grad btn-secondary mx-2'><FontAwesomeIcon icon={faArrowUpShortWide} size='2xl' /></button>
                            <button onClick={ resetHandle } className='btn btn-grad btn-secondary mx-2'><FontAwesomeIcon icon={faRotateRight} size='2xl' /></button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='row p-5'>
            <div className='col'>
                <table className='table'>
                    <tbody>
                        {
                            data.map((leaders)=>{
                                return <tr>
                                    <td>
                                        <h4>{leaders.firstname} {leaders.lastname}</h4>
                                        <h5>ID:{leaders.id}</h5>
                                        <img id="i" src={leaders.symbol} alt="img"></img>
                                        </td>
                                    <td className='text-end '>
                                        <button  onClick={ () => handleDelete(leaders.id) } className='btn btn-danger mx-2 my-5'><FontAwesomeIcon icon={faUserMinus} size='xl'/></button>
                                    </td>
                                </tr>
                            })
                        }
                        
                    </tbody>
                </table>
                </div>
        </div>
                <div className='row p-5'>
                    <div className='col text-center'>
                <button onClick={(event)=> {
                              event.preventDefault()
                              navigate(-1)
                          }} className='btn btn-grad btn-secondary mx-2' id="b"><FontAwesomeIcon icon={faArrowLeft} size='xl'/></button>
                <button onClick={(event)=> {
                              event.preventDefault()
                              navigate('/')
                          }} className='btn btn-grad btn-secondary mx-2' id="b"><FontAwesomeIcon icon={faHouse} size='xl'/></button>
                          </div>
                </div>
            
        </div>
    </div>
  )
}


export default AdminLeader