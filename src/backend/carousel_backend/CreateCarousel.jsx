import React, { useState,useEffect } from 'react'
import { carouselPost } from '../../crud/UserService';
import { useNavigate } from 'react-router-dom';

const CreateCarousel = () => {
    const navigator=useNavigate();
    const [carousel,setCarousel]=useState({carouselComment:"",carouselAlt:"",carouselLink:""})
    const [message,setMessage]=useState({message:"",ec:0});
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setCarousel({...carousel,[name]:value});
    }
    const handlerSubmit = (event)=>{
        event.preventDefault();
        const {carouselLink,carouselAlt}=carousel;

        //validate here
        if(carouselLink.trim()==""){
            setMessage({message:"link field must have some value",ec:1})
            return;
        }
        //call server here 
        carouselPost(carousel).then((resp)=>{
            console.log(resp);
            setMessage({message:`carousel is successfully created with ID ${resp.carouselId}`,ec:0})
            setTimeout(()=>{
                setMessage({message:"",ec:0})
                navigator("/testvite/user/dashboard/carousel/all")  // to be tested

            },3500)
            //problem related to unauthorized and authorized case
            //cors issue with token 
            //printed successs message

        }).catch((error)=>{
            console.error(error);
            setMessage({message:"error occured ",ec:2})
        })
    }
    const handlerReset=()=>{
        setCarousel({carouselComment:"",carouselAlt:"",carouselLink:""})
    }
    return (
    <>
    <div id='item-dash'>
        <h2 className='form-heading'> Create new Carousel </h2>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
        <hr />
        <div className='main-form'>
          <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
              <label htmlFor='carouselComment'> Carousel Caption </label>
              <input
                  type="text"
                  placeholder='Enter carousel caption'
                  id='carouselComment'
                  name='carouselComment'
                  onChange={(e)=>handleChange(e)}
                  value={carousel.carouselComment} />
              <br /><br />

              <label htmlFor='carouselAlt'> Carousel Alternative : </label>
              <input
                  type="text"
                  placeholder='Enter carousel alternative'
                  id='carouselAlt'
                  name='carouselAlt'
                  onChange={(e)=>handleChange(e)}
                  value={carousel.carouselAlt}
              />
              <br /><br />

              <label htmlFor='carouselLink'> Carousel Drive Link </label>
              <input
                  type="text"
                  placeholder='Enter carousel Drive Link'
                  id='carouselLink'
                  name='carouselLink'
                  onChange={(e)=>handleChange(e)}
                  value={carousel.carouselLink}
              />
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

export default CreateCarousel
