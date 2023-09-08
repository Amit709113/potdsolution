import React, { useEffect, useState } from 'react'
import { userGet } from '../../crud/UserService';

const GetAllUser = () => {
  const [userList,setUserList]=useState();
  const [message,setMessage]=useState("");
  const [isError,setIsError]=useState(0);
    useEffect(()=>{
        userGet().then((resp)=>{
            setUserList(resp);
            setIsError(0);
            setMessage(`data is fetched successfully !!`)
        }).catch((error)=>{
           setIsError(2);
           setMessage(`${error.message} can't connect to server`);
        })
    },[])
    
  return (
    <>
    <div className='main-element'>
        <h2 className='form-heading'>All User  </h2>
        <p className={`${isError==0?`message-success-log`:isError==1?`message-warning-log`:`message-error-log`} message-log` }>{message}</p>
        
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> User Id </th>
                    <th> Name </th>
                    <th> email </th>
                    <th> password </th>
                    <th> about </th>
                </tr>
            </thead>
            <tbody>
            {
                userList!=null ? userList.map((user,idx)=>{
                    const {id,name,email,password,about}=user;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{password} </td>
                        <td>{about}</td>
                    </tr> 
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default GetAllUser
