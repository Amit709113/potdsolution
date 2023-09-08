import React, { useEffect, useState } from 'react'
import { userDelete, userGet } from '../../crud/UserService';
import UpdateUser from './UpdateUser';

const DeleteUser = () => {
  const [userList,setUserList]=useState();
  const[user,setUser]=useState({})
  const[message,setMessage]=useState("");
  const[uId,setUId]=useState(0);  //to whom we want to update
  const[isClose,setClose]=useState(false);
  const[isError,setIsError]=useState(0);
  const messageSetter=(mess,ise)=>{

    setIsError(ise);
    setMessage(mess);
    
  }

  useEffect(()=>{
      userGet().then((resp)=>{
          setUserList(resp);
          setIsError(0)
          setMessage("data is fetched successfully")
      }).catch((error)=>{
          // console.log(error);
          setIsError(2);
          setMessage(`${error.message} can't connect to server`);
      })
  },[])

  const handlerDelete=(id)=>{
    userDelete(id).then((resp)=>{
      setIsError(0);
      setMessage(`${resp.message} with id : ${id} !!`)
    }).catch((error)=>{
      setIsError(2);
      setMessage(`${error.data.status}`)
    })

  }
  const handlerUpdate=(userId,usr)=>{
    setUId(userId);
    setUser(usr);
  }

  const closeFn=()=>{
    setClose(false);
  }


  return (
    <>
      <div className='main-element'>
        <h3 className='form-heading'>delete user  </h3>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> User Id </th>
                    <th> Name </th>
                    <th> email </th>
                    <th> delete </th>
                    <th> update </th>
                </tr>
            </thead>
            <tbody>
            {
                userList!=null ? userList.map((ur,idx)=>{
                    const {id,name,email}=ur;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td><button className='leaf-btn delete-btn' onClick={()=>handlerDelete(id)}>Delete</button></td>
                        <td><button className='leaf-btn update-btn' onClick={()=>{
                          handlerUpdate(id,ur);
                          setClose(true);
                        }}> Update </button></td>
                    </tr> 
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
        <p className={`${isError==0?`message-success-log`:isError==1?`message-warning-log`:`message-error-log`} message-log` }>{message}</p>
        
        {/* user updation */}
        {
          isClose ? <UpdateUser uId={uId} usr={user} closeFn={closeFn} messageSetter={messageSetter}/> : null
        }
    </div>
    </>
  )
}

export default DeleteUser
   