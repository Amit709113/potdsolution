import React, { useEffect, useState } from 'react'
import { topperGet } from '../../crud/UserService';

const GetAllTopper = () => {
    const [topperList,setTopperList]=useState();
    const [message,setMessage]=useState({message:"",ec:0});
    useEffect(()=>{
        topperGet().then((resp)=>{

            setTopperList(resp);
            setMessage({message:`data is fetched successfully !!`,ec:0})
        }).catch((error)=>{
            setMessage({message:` ${error.message} data can't be fetched `,ec:2})
        })
    },[])
  return (
    <>
    <div className='main-element'>
        <h3 className='form-heading'>All Topper  </h3>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
      
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Topper Id </th>
                    <th> Name </th>
                    <th> Year </th>
                    <th> feedback </th>
                    <th> Score </th>
                </tr>
            </thead>
            <tbody>
            {  
                topperList!=null ? topperList.map((topper,idx)=>{
                    const {topperId,topperName,topperYear,topperFeedback,topperScore}=topper;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{topperId}</td>
                        <td>{topperName}</td>
                        <td>{topperYear}</td>
                        <td>{topperFeedback} </td>
                        <td>{topperScore}</td>
                    </tr>
                    
                }) : <tr><td>loading ...</td><td>{message.message}</td></tr>
            }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default GetAllTopper
