import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { categoryPost } from '../../crud/UserService';

const CreateCategory = () => {
  const navigator=useNavigate();
  const [message,setMessage]=useState({message:"",ec:0});
  const [category,setCategory]=useState({categoryName:"",categoryAbout:""});

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setCategory({...category,[name]:value});
  }
  
  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {categoryName}=category;

    //validate
    if(categoryName.trim()==""){
      setMessage({message:"name feild must have some value",ec:1})
      return;
    }
    
    //call server
    categoryPost(category).then((resp)=>{
      console.log(resp);
      setMessage({message:`category is successfully created with ID ${resp.categoryId}`,ec:0})
            setTimeout(()=>{
                setMessage({message:"",ec:0})},3000)
    }).catch((error)=>{
      console.error(error);
      setMessage({message:"error occured ",ec:2})

    })
  }

  const handlerReset=()=>{
    setCategory({categoryName:"",categoryAbout:""})
  }

  return (
    <>
    <div id='item-dash'>
      <h2 className='form-heading'> Create category </h2>
      <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
      
      <hr />
      <div className='main-form'>
        <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
            <label htmlFor='categoryName'>Category Name : </label>
            <input
                type="text"
                placeholder='Enter category name '
                id='categoryName'
                name='categoryName'
                onChange={(e)=>handleChange(e)}
                value={category.categoryName}
            />
            <br /> <br />
            <label htmlFor='categoryAbout'>About : </label>
            <textarea 
            placeholder='2 lines about category '
            rows={5}
            cols={25}
            id="categoryAbout"
            name='categoryAbout'
            value={category.categoryAbout}
            onChange={(e)=>handleChange(e)}> </textarea>
            <br /> <br />

            <div className='btn-container'>
                <button className='leaf-btn submit-btn' type="submit"> SUBMIT </button>
                <button  className='leaf-btn reset-btn' type="reset">RESET</button>
            </div>
        </form>
        </div>
      </div>
  </>
  )
}

export default CreateCategory
