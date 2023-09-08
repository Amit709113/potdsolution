import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { topperPost } from '../../crud/UserService';

const CreateTopper = () => {
  const navigator=useNavigate();
  const [message,setMessage]=useState({message:"",ec:0});
  const [topper,setTopper]=useState({topperId:"",topperName:"",topperYear:"",topperFeedback:"",topperScore:"",topperLink:""})
  
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setTopper({...topper,[name]:value})
  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {topperName,topperFeedback,topperYear}=topper;

    //validate 
    if(topperName.trim()=="" || topperFeedback.trim()==""|| topperYear.trim()==""){
      setMessage({message:"name, feedback and year must have some value",ec:1})
      return;
    }
    //call server
    topperPost(topper).then((resp)=>{
      // console.log(resp);
      setMessage({message:"carousel is successfully created ",ec:0})
            setTimeout(()=>{
              setMessage({message:"",ec:0})
                navigator("/testvite/user/dashboard/topper/all")  // to be tested
            },3500)

    }).catch((error)=>{
        console.log(error);  //fix when what type of error 
        setMessage({message:"error to be fixed when what type ",ec:2})
    })
  }

  const handlerReset=()=>{
    setTopper({topperName:"",topperYear:"",topperFeedback:"",topperScore:"",topperLink:""})
  }
  
  return (
    <>
    <div id='item-dash'>
      <h1 className='form-heading'> Create new Topper </h1>
      <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
      <div className='main-form'>
        <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
            <label htmlFor='topperName'> Name : </label>
            <input
                type="text"
                placeholder='Enter student name '
                id='topperName'
                name='topperName'
                onChange={(e)=>handleChange(e)}
                value={topper.topperName}
            />
            <br />
            <br />

            <label htmlFor='topperYear'> Year : </label>
            <input
                type="text"
                placeholder='Enter passout Year '
                id='topperYear'
                name='topperYear'
                onChange={(e)=>handleChange(e)}
                value={topper.topperYear}
            />
            <br />
            <br />

            <label htmlFor='topperFeedback'> Feedback : </label>
            {/* the below line of code for adding text area and is successfully tested */}
            <textarea 
            placeholder='Enter feedback'
            rows={5}
            cols={25}
            id="topperFeedback"
            name='topperFeedback'
            value={topper.topperFeedback}
            onChange={(e)=>handleChange(e)}> </textarea>
            <br /><br />
            <label htmlFor='topperScore'> Score : </label>
            <input
                type="text"
                placeholder='Enter score '
                id='topperScore'
                name='topperScore'
                onChange={(e)=>handleChange(e)}
                value={topper.topperScore}
            />
            <br />
            <br />

            <label htmlFor='topperLink'> drive link : </label>
            <input
                type="text"
                placeholder='Enter Drive Link '
                id='topperLink'
                name='topperLink'
                onChange={(e)=>handleChange(e)}
                value={topper.topperLink}
            />
            <br />
            <br />
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

export default CreateTopper
