import React, {useState } from 'react'
import { topperPut } from '../../crud/UserService';

const UpdateTopper = ({tId,tpr,closeFn,messageSetter}) => {
  const [topper,setTopper]=useState(tpr);
  
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setTopper({...topper,[name]:value})
  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {topperName,topperFeedback,topperYear}=topper;

    //validate 
    if(topperName.trim()=="" || topperFeedback.trim()==""|| topperYear.trim()==""){
      messageSetter("name, feedback and year must have some value",1)
      return;
    }
    //call server
    topperPut(tId,topper).then((resp)=>{
      // console.log(resp);
      messageSetter(`topper with name ${resp.topperName} is successfully updated `,0);
      closeFn();

    }).catch((error)=>{
        messageSetter("error to be fixed for what and when to t",2)
    })
  }

  const handlerReset=()=>{
    setTopper({topperName:"",topperYear:"",topperFeedback:"",topperScore:"",topperLink:""})
  }
  
  return (
    <>
    <div id='item-dash'>
      
      <h3 className='form-heading'> Update form  </h3>
      <button className='close-btn leaf-btn' style={{float:"right",padding:"6px",margin:"12px"}}  onClick={()=>{
          closeFn()
        }}> close </button>
      <hr />
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
              placeholder='feedback'
              rows={5}
              cols={25}
              id="topperFeedback"
              name='topperFeedback'
              value={topper.topperFeedback}
              onChange={(e)=>handleChange(e)}> </textarea>
              <br />
              <br />

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

export default UpdateTopper
