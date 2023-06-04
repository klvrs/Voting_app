import React, { useEffect, useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRotateRight,faArrowUpShortWide,faArrowLeft,faHouse,faUserPlus,faUserMinus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const AdminUser =()=>{
    const [data, setData] = useState([])
    
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:4000/users?_sort=name')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    const sortByRollno = () => {
        axios.get('http://localhost:4000/users?_sort=rollno')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }

    const resetHandle = () => {
        axios.get('http://localhost:4000/users?_sort=name')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        
        const confirm = window.confirm('Do you want to delete a user?')
        if(confirm) {
            axios.delete('http://localhost:4000/users/'+id)
            .then(res=>{
                alert('User has been deleted!!!')
                
            })
            .catch(err => console.log(err))
        }
    }

  return (
    <div className='container  '>
    <div className='col' id="aul">
       <div className='row p-5'> 
            <div className='col-12 border rounded d-flex'>
                <div className='container'>
                    <div className='row p-2'>
                        <div className='col-6 '>
                            <h1>All Users List</h1>
                        </div> 
                        <div className='col-6 text-end pt-2'>
                            <Link to= "adminusersignup" className='btn btn-success text-end'><FontAwesomeIcon icon={faUserPlus} size='2xl'/></Link> 
                        </div>
                    </div>
                    <div className='row text-center  p-2'>
                       
                        <div className='col-12 text-center'>
                            
                            <button onClick={ sortByRollno } className='btn btn-secondary btn-grad mx-2'><FontAwesomeIcon icon={faArrowUpShortWide} size='2xl' /></button>
                           
                          
                            <button onClick={ resetHandle } className='btn btn-secondary btn-grad mx-2'><FontAwesomeIcon icon={faRotateRight} size='2xl' /></button>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='row  p-5'>
            <div className='col '>
                <table className='table '>
                    <tbody >
                        {
                            data.map((user)=>{
                                return <tr>
                                    <td>
                                        <h4>{user.name} <sup><small>{user.rollno}</small></sup></h4>
                                        <p className='lead'>{user.email}</p>
                                        <p className='lead'>{user.branch}</p>
                                    </td>
                                    <td className='text-end'>
                                        <button onClick={ () =>handleDelete(user.id)} className='btn btn-danger mx-2 my-5 '><FontAwesomeIcon icon={faUserMinus} size='xl'/></button>
                                    </td>
                                </tr>
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    
        <div className='row p-5'>
            <div  className=' col text-center'>
                <button onClick={(event)=> {
                        event.preventDefault()
                        navigate(-1)
                        }} className='btn btn-grad btn-secondary mx-2' id="b"><FontAwesomeIcon icon={faArrowLeft} size='xl'/></button>
                <button onClick={(event)=> {
                        event.preventDefault()
                        navigate('/')
                        }} className='btn  btn-secondary mx-2' id="b"><FontAwesomeIcon icon={faHouse} size='xl'/></button>
            </div>
        </div> 
        </div>
    </div>  
    
  )
}


export default AdminUser