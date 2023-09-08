import React, { useEffect, useState } from 'react'
import { categoryGet } from '../../crud/UserService';

const GetAllCategory = () => {
  const[categoryList,setCategoryList]=useState();
  const [message,setMessage]=useState({message:"",ec:0});
  useEffect(()=>{
    categoryGet().then((resp)=>{
      setCategoryList(resp);
      setMessage({message:"data is fetched",ec:0})
    }).catch((error)=>{
      setMessage({message:` ${error.message} data can't be fetched `,ec:2})
      console.error(error);  
    })
  },[])

  
  return (
    <>
      <div className='main-element'>
        <h3 className='form-heading' >All Category  </h3>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Category Id </th>
                    <th> Name </th>
                    <th> About </th>
                </tr>
            </thead>
            <tbody>
            {
                
                categoryList!=null ? categoryList.map((category,idx)=>{
                    const {categoryId,categoryName,categoryAbout}=category;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{categoryId}</td>
                        <td>{categoryName}</td>
                        <td>{categoryAbout}</td>
                    </tr>
                    
                }) : <tr><td>loading ...</td><td>{message.message}</td></tr>
            }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default GetAllCategory
