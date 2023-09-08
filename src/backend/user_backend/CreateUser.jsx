import React, { useState } from 'react'
import { userPost } from '../../crud/UserService';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigator=useNavigate();
  const [message,setMessage]=useState();
  const [user,setUser]=useState({name:"",email:"",password:"",about:""})
  const [isError,setIsError]=useState(0);
  
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUser({...user,[name]:value})
  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {name,email,password}=user;

    //validate 
    if(name.trim()=="" || email.trim()==""|| password.trim()==""){
      setIsError(1);
      setMessage("name, email and password must have some value")
      return;
    }
    //call server
    userPost(user).then((resp)=>{
      // console.log(resp);
      setIsError(0);
      setMessage(`user is successfully created with name ${resp.name} ` );

            setTimeout(()=>{
                setMessage("")
                navigator("/testvite/user/dashboard/users/all")  // to be tested
            },3000)

    }).catch((error)=>{
        console.error(error);
        setIsError(2)
        setMessage(error.response.data.name);
        setTimeout(()=>{
            setMessage("")
        },3500)
    })
  }

  const handlerReset=()=>{
    setMessage("");
    setIsError(0);
    setUser({name:"",email:"",password:"",about:""})
  }
  

  return (
    <>
      <div id='item-dash'>
        <h1 className='form-heading'> Create new User </h1>
        <p className={`${isError==0?`message-success-log`:isError==1?`message-warning-log`:`message-error-log`} message-log` }>{message}</p>
        <hr />
        <div className='main-form'> 
        <form id="forms" onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
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
        rows={6}
        cols={30}
        id="about"
        name='about'
        value={user.about}
        onChange={(e)=>handleChange(e)}> </textarea>
        <br/> <br/>
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

export default CreateUser
