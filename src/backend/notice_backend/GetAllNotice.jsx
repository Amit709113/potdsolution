import React, { useEffect, useState } from 'react'
import { noticeGet } from '../../crud/UserService';

const GetAllNotice = () => {
    const [noticeList,setNoticeList]=useState();
    const [message,setMessage]=useState("");
    const [isError,setIsError]=useState(0);
    useEffect(()=>{
        getAllNotice();
    },[])

    const getAllNotice=()=>{
        noticeGet().then((resp)=>{
            setIsError(0);
            setMessage("data is fetched successfully")
            setNoticeList(resp)
        }).catch((error)=>{
           setIsError(2);
           setMessage(`${error.message} can't connect to server`);
        })
    }

  return (
   <>
    <div className='main-element'>
        <h2 className='form-heading'>All notices </h2>
        <p className={`${isError==0?`message-success-log`:isError==1?`message-warning-log`:`message-error-log`} message-log` }>{message}</p>
        
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Notice Id </th>
                    <th> Date </th>
                    <th> Title </th>
                    <th>body</th>
                    <th> drive link </th>
                    <th> Author </th>
                </tr>
            </thead>
            <tbody>
            {
                noticeList!=null ? noticeList.map((notice,idx)=>{
                    const {noticeId,noticeDate,noticeTitle,noticeDesc,noticeLink,noticeAuthor}=notice;
                    return <tr key={idx}>
                        <td> {idx+1} </td>
                        <td> {noticeId}</td>
                        <td> {noticeDate}</td>
                        <td> {noticeTitle}</td>
                        <td> {noticeDesc} </td>
                        <td> {noticeLink} </td>
                        <td> {noticeAuthor}</td>
                    </tr>
                    
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
        
    </div>

   </>
  )
}

export default GetAllNotice
