import React, { useEffect, useState } from 'react'
import { galleryGet } from '../../crud/UserService';

const GetAllImage = () => {

  const [galleryList,setgalleryList]=useState();
  const [message,setMessage]=useState({message:"",ec:0});
    useEffect(()=>{
        galleryGet().then((resp)=>{
            setgalleryList(resp);
            setMessage({message:`data is fetched successfully !!`,ec:0})
        }).catch((error)=>{
            setMessage({message:` ${error.message} data can't be fetched `,ec:2})
        })
    },[])
  return (
    <>
    <div className='main-element'>
        <h3 className='form-heading'>All Images </h3>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
      
        <table>
            <thead>
                <tr>
                <th> Serial No </th>
                <th> Image Id </th>
                <th> caption </th>
                <th> Alt </th>
                <th> Drive link </th>
                <th> image </th>
                </tr>
            </thead>
            <tbody>
            {
                galleryList!=null ? galleryList.map((gallery,idx)=>{
                    const {galleryId,galleryAlt,galleryCaption,galleryLink}=gallery;
                    return <tr key={idx}>
                        <td> {idx+1} </td>
                        <td> {galleryId}</td>
                        <td> {galleryCaption}</td>
                        <td> {galleryAlt}</td>
                        <td> {galleryLink} </td>
                    </tr>
                    
                }) : <tr><td>loading ...</td><td>{message.message}</td></tr>
            }
            </tbody>
        </table>
        
    </div>
    </>
  )
}

export default GetAllImage
