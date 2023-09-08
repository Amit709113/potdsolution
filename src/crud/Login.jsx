import React, { useState } from 'react'
import { logIn } from './UserService';
import { doLogin } from '../auth';
import { useNavigate } from 'react-router-dom';

import "../backend/backend-style.css"

const Login = () => {
  const navigate=useNavigate();

  const[loginDetails,setLoginDetails]=useState({username:"",password:""});
  const [message,setMessage]=useState({message:"",ec:0});

  const handleChange=(event)=>{
    const{name,value}=event.target;
    setLoginDetails({ ...loginDetails,[name]:value })
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    //validate data

    if(loginDetails.username.trim()=="" || loginDetails.password.trim()==""){
      setMessage({message:"Credentials must not be empty",ec:1})
      return;
    }
    else{
      //call server data
      //change start
      // logIn(loginDetails).then((resp)=>{
      //   setMessage(`data come here` )
      //   console.log(resp);
      // }).catch((error)=>{
      //   setMessage(`${error.message}`)
      //   console.log(error);

      // })

      //change end

      logIn(loginDetails).then((data)=>{
        //console.log(data);
        doLogin(data,()=>{
          // setMessage({message:`welcome ${data.userDto.name} `,ec:0})
          console.log(`${data.userDto.name } is logged in  `)
          //redirct to user dashboard page 
          // setTimeout(()=>{navigate("/testvite/user/dashboard")},1500)
          
        })
        setMessage({message:`welcome ${data.userDto.name} `,ec:0})
        setTimeout(()=>{
          setMessage({message:"",ec:0})
          navigate("/testvite/user/dashboard")
          //put here a hook that will refresh each components 
        },1500)

      }).catch((error)=>{
        // console.log(error);
        setMessage({message:`${error.message}`,ec:2})

        if(error.response.status!=400 && error.response.status!=404){
          
          setTimeout(()=>setMessage({message:"",ec:2}),3000)
        }
        else if(error.response.status==404){
          setMessage({message:` Invalid Username, ${error.response.data.message}`,ec:2})
          setTimeout(()=>setMessage({message:"",ec:2}),3000)
        }
        else if(error.response.status!=400){  
          setMessage({message:"password is incorrect",ec:2})
          setTimeout(()=>setMessage({message:"",ec:2}),3000);
        }
      })
    }
  }

  const handlerReset=(e)=>{
    setLoginDetails({username:"",password:""});
    setMessage({message:"",ec:0})
  }

  return (
    <>
    <div id='item-dash'>
      <h2 className='form-heading'> Login </h2>
      <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
      
      <div className='main-form'>
        <form
          onSubmit={(e)=>{ handleSubmit(e)  }}
          onReset={(e)=>{ handlerReset(e) }}
        >

          <br />
          
          <label htmlFor="username"> Enter username : </label>
          <input
              type="text"
              placeholder='Enter registered email'
              id='username'
              name='username'
              onChange={(e)=>handleChange(e)}
              value={loginDetails.username}
          
          />
          <br/>
          <br/>

          <label htmlFor="password"> Enter Password : </label>
          <input
              type="text"
              minLength={40}
              placeholder='Enter password'
              id='password'
              name='password'
              onChange={(e)=>handleChange(e)}
              value={loginDetails.password}
          />
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

export default Login

