import React, { useEffect, useState } from 'react'
import { signUp } from './UserService'
const Register = () => {

    const[data,setData]=useState({ name:"", email:"", password:"", about:"" })
    const [message,setMessage]=useState({message:"",ec:0});
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setData({...data,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        //data validate
        if(data.name.trim()==""||data.email.trim()=="" || data.password.trim()==""){
            setMessage({message:`fill all the feilds  `,ec:1})
            return ;
        }

        //call server api for sending the api
        signUp(data).then((resp)=>{
            // console.log(resp);
            setMessage({message:`You are successfully Registered !! `,ec:0})
            setTimeout(()=>{
                setMessage({message:"",ec:0})
                navigate("/testvite/user/login")},1500
            )
        })
        .catch((error)=>{
            setMessage({message:`Username already exist , ${error.response.data.message}`,ec:0})
        })
    }

    const handlerReset=(e)=>{
        setData(
            { name:"",email:"",password:"",about:"" })
            setMessage({message:``,ec:0})
    }

  return (
    <>
    <div id='item-dash'>
        <h2 className='form-heading'> Register </h2>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
        <div className='main-form'>
            <form
                onSubmit={(e)=>{ handleSubmit(e) }}
                onReset={(e)=>{ handlerReset(e) }}>
                
                <label htmlFor="name"> Enter Name : </label>
                <input
                    type="text"
                    placeholder='Enter your name'
                    id='name'
                    name='name'
                    onChange={(e)=>handleChange(e)}
                    value={data.name}
                />
                <br/> <br/>

                <label htmlFor="email"> Enter Email : </label>
                <input
                    type="email"
                    placeholder='Enter your email'
                    id='email'
                    name='email'
                    onChange={(e)=>handleChange(e)}
                    value={data.email}
                />
                <br/> <br/>

                <label htmlFor="password"> Enter Password : </label>
                <input
                    type="text"
                    placeholder='Enter your name'
                    id='password'
                    name='password'
                    onChange={(e)=>handleChange(e)}
                    value={data.password}
                />

                <br/> <br/>
                <label htmlFor="about"> Enter about  : </label>
                <input
                    type="textarea"
                    placeholder='About Yourself'
                    id='about'
                    name='about'
                    onChange={(e)=>handleChange(e)}
                    value={data.about}
                />
                <br/><br/> 

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

export default Register

