import React, { useState } from 'react'
import { noticePost } from '../../crud/UserService';
import { useNavigate } from 'react-router-dom';

const CreateNotice = () => {
    const navigate=useNavigate()
    const [notice,setNotice]=useState({noticeTitle:"",noticeDesc:"",noticeDate:"",noticeLink:"",noticeAuthor:""})
    const [message,setMessage]=useState("");
    const [isError,setIsError]=useState(0);
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setNotice({...notice,[name]:value});
    }

    const handlerSubmit=(event)=>{
        event.preventDefault();

        const {noticeTitle,noticeDesc,noticeAuthor,noticeLink,noticeDate}=notice;
        //validate
        if(noticeTitle.trim()=="" || noticeDesc.trim()=="" ){
            setIsError(1);
            setMessage("title and description must have some value")
            return ;
        }   
        //call server
        noticePost(notice).then((resp)=>{
            setIsError(0);
            setMessage(`notice is created successfully`)
            
            setTimeout(()=>{
                setMessage("")
                navigate("/testvite/user/dashboard")
            },3000);
            //problem encountered here unauthorised case and how to fix authorized case 
            //cors issue happen when we try to send token along with header fix it later
            //print success message and navigate to a new page where
        }).catch((error)=>{
            setIsError(2);
            setMessage("something went wrong !! ")
            console.error(error);
            setTimeout(()=>setMessage(""),3500);
        })
    }
    const handlerReset=(event)=>{
        setNotice({noticeTitle:"",noticeDesc:"",noticeDate:"",noticeLink:"",noticeAuthor:""})
    }
  return (
    <>
    <div id='item-dash'>
        <p className={`${isError==0?`message-success-log`:isError==1?`message-warning-log`:`message-error-log`} message-log` }>{message}</p>
        <h1 className='form-heading'> Create new Notice  </h1>
    <hr />
        <div className='main-form'>
            <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
                <label htmlFor='noticeTitle'> Notice Title : </label>
                <input
                    type="text"
                    placeholder='Enter notice title'
                    id='noticeTitle'
                    name='noticeTitle'
                    onChange={(e)=>handleChange(e)}
                    value={notice.noticeTitle}
                />
                <br />
                <br />

                <label htmlFor='noticeDate'> Notice Date : </label>
                <input
                    type="date"
                    placeholder='Enter notice Date'
                    id='noticeDate'
                    name='noticeDate'
                    onChange={(e)=>handleChange(e)}
                    value={notice.noticeDate}
                />
                <br />
                <br />


                <label htmlFor='noticeAuthor'> authority : </label>
                <input
                    type="text"
                    placeholder='Enter notice authority'
                    id='noticeAuthor'
                    name='noticeAuthor'
                    onChange={(e)=>handleChange(e)}
                    value={notice.noticeAuthor}
                />
                <br />
                <br />

                <label htmlFor='noticeLink'> Notice Link : </label>
                <input
                    type="text"
                    placeholder='Enter notice Link'
                    id='noticeLink'
                    name='noticeLink'
                    onChange={(e)=>handleChange(e)}
                    value={notice.noticeLink}
                />
                <br />
                <br />

                <label htmlFor='noticeDesc' >Notice Description :<br /> </label>
                    <textarea 
                    rows={6}
                    cols={50}
                    placeholder='Describe'
                    id="noticeDesc"
                    name='noticeDesc'
                    value={notice.noticeDesc}
                    onChange={(e)=>handleChange(e)}> </textarea>
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

export default CreateNotice
