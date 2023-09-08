import React, { useEffect, useState } from 'react'
import { carouselGet } from '../../crud/UserService';

const GetAllCarousel = () => {
    const [carouselList,setCarouselList]=useState();
    const [message,setMessage]=useState({message:"",ec:0});

    useEffect(()=>{
        allCarousel();
    },[])
    const allCarousel = () => {
        carouselGet().then((resp)=>{
            setMessage({message:"data is fetched successfully",ec:0})
           setCarouselList(resp);
        }).catch((error)=>{
            setMessage({message:` ${error.message} data can't be fetched `,ec:2})
            console.error(error);
        })
    }

  return (
   <>
   <div className='main-element'>
        <h3 className='form-heading'>All Carousel  </h3>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
        <table>
            <thead>
                <tr>
                <th> Serial No </th>
                <th> Carousel Id </th>
                <th> Carousel Comment </th>
                <th> Carousel Alt </th>
                <th> Drive link </th>
                </tr>

            </thead>
            <tbody>
            {
                carouselList!=null ? carouselList.map((carousel,idx)=>{
                    const {carouselId,carouselAlt,carouselComment,carouselLink}=carousel;
                    return <tr key={idx}>
                        <td> {idx+1} </td>
                        <td> {carouselId}</td>
                        <td> {carouselComment}</td>
                        <td> {carouselAlt}</td>
                        <td> {carouselLink} </td>
                    </tr>
                    
                }) : <tr><td>loading ...</td><td>{message.message}</td></tr>
            }
            </tbody>
        </table>
    </div>
   </>
  )
}

export default GetAllCarousel
