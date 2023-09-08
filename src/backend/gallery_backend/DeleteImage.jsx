import React, { useEffect, useState } from 'react'
import {galleryDelete, galleryGet } from '../../crud/UserService'
const DeleteImage = () => {

  const [galleryList,setGalleryList]=useState();
  const [message,setMessage]=useState({message:"",ec:0});
  useEffect(()=>{
    galleryGet().then((resp)=>{
      setGalleryList(resp);
      setMessage({message:`data is fetched successfully !!`,ec:0})
    }).catch((error)=>{
      setMessage({message:` ${error.message} data can't be fetched `,ec:2})
  })
  },[])
  const handlerDelete=(id)=>{
    galleryDelete(id).then((resp)=>{
     setMessage({message:`image with id ${id} is deleted successfully `,ec:0})
    }).catch((error)=>{
      if(error.response.status==404)
        setMessage({message:` ${error.response.data.message} already deleted `,ec:0})
      else
        setMessage({message:"data can't be fetched",ec:0})
    })
  }
  return (
    <>
    <div className='main-element'>
        <h3 className='form-heading'>delete Image  </h3>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Image Id </th>
                    <th> caption </th>
                    <th> delete </th>
                </tr>
            </thead>
            <tbody>
            {
                galleryList!=null ? galleryList.map((gallery,idx)=>{
                    const {galleryId,galleryCaption}=gallery;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{galleryId}</td>
                        <td>{galleryCaption}</td>
                        <td><button className='leaf-btn delete-btn' onClick={()=>handlerDelete(galleryId)}>Delete</button></td>
                    </tr> 
                }) : <tr><td>loading ...</td><td>{message.message}</td></tr>
            }
            </tbody>
        </table>
        </div>
    </>
    
  )
}

export default DeleteImage
  