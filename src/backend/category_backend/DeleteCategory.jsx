import React, { useEffect, useState } from 'react'
import { categoryDelete, categoryGet } from '../../crud/UserService';
import UpdateCategory from './UpdateCategory';

const DeleteCategory = () => {

  const[categoryList,setCategoryList]=useState();
  const[category,setCategory]=useState();
  const [message,setMessage]=useState({message:"",ec:0});
  const[cId,setCId]=useState(0);
  const[isClose,setClose]=useState(false);

  useEffect(()=>{
    categoryGet().then((resp)=>{
      setCategoryList(resp);
      setMessage({message:"data is fetched",ec:0})
    }).catch((error)=>{
       setMessage({message:` ${error.message} data can't be fetched `,ec:2})
      console.error(error);
    })
  },[])

  const handlerDelete=(id)=>{

    categoryDelete(id).then((resp)=>{
      setMessage({message:`category with id ${resp.categoryId} is deleted successfully !!`,ec:0})
    }).catch((error)=>{
      if(error.response.status==404)
        setMessage({message:` ${error.response.data.message} already deleted `,ec:1})
      else
        setMessage({message:"data can't be fetched",ec:"0"})
    })
  }
  const handlerUpdate=(categoryId,category)=>{
    setCId(categoryId);
    setCategory(category);
  }

  const messageSetter=(msg,ecc)=>{
    setMessage({message:msg,ec:ecc});
  }
  const closeFn=()=>{
    setClose(false);
  }

  return (
    <>
    <div className='main-element'>
        <h3 className='form-heading'>delete category  </h3>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Category Id </th>
                    <th> Name </th>
                    <th> delete </th>
                    <th> update </th>
                </tr>
            </thead>
            <tbody>
            {
                categoryList!=null ? categoryList.map((category,idx)=>{
                    const {categoryId,categoryName}=category;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{categoryId}</td>
                        <td>{categoryName}</td>
                        <td><button className='delete-btn leaf-btn' onClick={()=>handlerDelete(categoryId)}>delete</button></td>
                        <td><button className='update-btn leaf-btn' onClick={()=>{
                          handlerUpdate(categoryId,category);
                          setClose(true);
                        }}>update</button></td>
                    </tr> 
                }) : <tr><td>loading ...</td><td>{message.message}</td></tr>
            }
            </tbody>
        </table>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
        {/* topper updation new  */}
        {
          isClose ? <UpdateCategory cId={cId} cgy={category} closeFn={closeFn} messageSetter={messageSetter}/> : null
        } 
    </div>
    </>
  )
}
export default DeleteCategory