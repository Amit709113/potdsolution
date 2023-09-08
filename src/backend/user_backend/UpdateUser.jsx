import React, { useState } from 'react'
import { userPut } from '../../crud/UserService';
import { AiOutlineClose } from "react-icons/ai";
const UpdateUser = ({uId,usr,closeFn,messageSetter}) => {
  const[user,setUser]=useState(usr)

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUser({...user,[name]:value})
  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {name,email,password}=user;
    
    //validate 
    //this is not working as expected
    try{
      
      if(JSON.stringify(name).trim()=="" ||JSON.stringify(email).trim()==""||JSON.stringify(password).trim()==""){
        messageSetter("name, email and password must have some value",1)
        return;
      }
    }catch(e){
      messageSetter("User is deleted already enter password  ! ",2)

    }
    
    //call server
    userPut(uId,user).then((resp)=>{
      console.log(resp);
      messageSetter(`user is successfully updated with ${JSON.stringify(resp.id)}`,0 );
            setTimeout(()=>{
                messageSetter("",0)
            },3000)

    }).catch((error)=>{
      // console.log(error);
      messageSetter(error.response.data.message,2);
      setTimeout(()=>{
          messageSetter("",0)
      },3000)
    })
  }

  const handlerReset=()=>{
    setUser({name:"",email:"",password:"",about:""})
  }
  
  return (
    <>
      <div id='item-dash'>
      <h3 className='form-heading'> Update User </h3>
      <button className='close-btn leaf-btn' style={{float:"right",padding:"6px",margin:"12px"}}  onClick={()=>{
          closeFn()
        }}> <AiOutlineClose className='icon-btn'/> </button>
      <hr />
      <div className='main-form'> 
      <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
      <label htmlFor="name"> Enter Name : </label>
        <input
            type="text"
            placeholder='Enter your name'
            id='name'
            name='name'
            onChange={(e)=>handleChange(e)}
            value={user.name}
        />
        <br/>
        <br/>
        <label htmlFor="email"> Enter Email : </label>
        <input
            type="email"
            placeholder='Enter your email'
            id='email'
            name='email'
            onChange={(e)=>handleChange(e)}
            value={user.email}
        />
        <br/>
        <br/>

        <label htmlFor="password"> Enter Password : </label>
        <input
            type="text"
            placeholder='Enter password'
            id='password'
            name='password'
            onChange={(e)=>handleChange(e)}
            value={user.password}
        
        />
        <br/>
        <br/>

        <label htmlFor="about"> Enter about  : </label>
        <textarea 
        placeholder='about yourself'
        rows={5}
        cols={25}
        id="about"
        name='about'
        value={user.about}
        onChange={(e)=>handleChange(e)}> </textarea>
        <br/>
        <br/>
        <div className='btn-container'>
            <button className='leaf-btn submit-btn' type="submit"> SUBMIT </button>
            <button className="leaf-btn reset-btn" type="reset">RESET</button>
        </div>
        </form>
      </div>
     </div>
    </>
  )
}

export default UpdateUser
