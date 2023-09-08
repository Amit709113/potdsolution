import React, { useEffect, useState } from 'react'
import { topperDelete, topperGet } from '../../crud/UserService';
import UpdateTopper from './UpdateTopper'
const DeleteTopper = () => {
  
  const [topperList,setTopperList]=useState();
  const[isClose,setClose]=useState(false);
  const[topper,setTopper]=useState({})
  const[tId,setTId]=useState(0);
  const [message,setMessage]=useState({message:"",ec:0});

  const messageSetter=(mess,eco)=>{
    setMessage({message:mess,ec:eco});
  }

  useEffect(()=>{
      topperGet().then((resp)=>{
        setMessage({message:`data is fetched successfully !!`,ec:0})
        setTopperList(resp);

      }).catch((error)=>{
        setMessage({message:` ${error.message} data can't be fetched `,ec:2})
      })
  },[])

  const handlerDelete=(id)=>{

    topperDelete(id).then((resp)=>{
      // console.log(resp);  //to be fixed what is id will do
      setMessage({message:`topper with id ${id} is deleted successfully !! `,ec:0})
    }).catch((error)=>{
      // console.log(error); 
      if(error.response.status==404)
        setMessage({message:` ${error.response.data.message} already deleted `,ec:2})
      else
        setMessage({message:"data can't be fetched",ec:0})
    })

  }
  const handlerUpdate=(topperId,topper)=>{
    setTId(topperId);
    setTopper(topper);
  }

  const closeFn=()=>{
    setClose(false);
  }
  return (
    <>
    <div className='main-element'>
        <h3 className='form-heading'>delete topper  </h3>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Topper Id </th>
                    <th> Name </th>
                    <th> Year </th>
                    <th> feedback </th>
                    <th> delete </th>
                    <th> update </th>
                </tr>

            </thead>
            <tbody>
            {
                
                topperList!=null ? topperList.map((topper,idx)=>{
                    const {topperId,topperName,topperYear,topperFeedback}=topper;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{topperId}</td>
                        <td>{topperName}</td>
                        <td>{topperYear}</td>
                        <td>{topperFeedback} </td>
                        <td><button className='leaf-btn delete-btn' onClick={()=>handlerDelete(topperId)}>Delete</button></td>
                        <td><button className='leaf-btn update-btn' onClick={()=>{
                          handlerUpdate(topperId,topper);
                          setClose(true);
                        }}> Update </button></td>
                    </tr>
                }) : <tr><td>loading ...</td><td>{message.message}</td></tr>
            }
            </tbody>
        </table>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
      
        {/* topper updation new  */}
        {
          isClose ? <UpdateTopper tId={tId} tpr={topper} closeFn={closeFn} messageSetter={messageSetter}/> : null
        }
    </div>
    </>
  )
}

export default DeleteTopper
 