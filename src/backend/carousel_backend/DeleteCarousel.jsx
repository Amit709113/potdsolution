import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { carouselDelete } from '../../crud/UserService';
import { carouselGet ,carouselUpdateApiCall} from '../../crud/UserService';

const DeleteCarousel = () => {

  const[carouselList,setCarouselList]=useState();
  const [message,setMessage]=useState({message:"",ec:0});
  const[updateCarousel,setUpdateCarousel]=useState();
  const[updateId,setUpdateId]=useState(0);
  const[updateBox,setUpdateBox]=useState(false);

  useEffect(()=>{
    allCarousel();
  },[])
  const allCarousel = () => {
      carouselGet().then((resp)=>{
      setMessage({message:` data is fetched `,ec:0})
          setCarouselList(resp);
      }).catch((error)=>{
        setMessage({message:` ${error?error.message:null} data can't be fetched `,ec:2})
            
      })
  }

  const  deleteCarouselById=(id)=>{
    carouselDelete(id).then((resp)=>{
      // console.log(message)
      setMessage({message:`carousel with id ${id} is deleted successfully `,ec:0})
            
    }).catch((error)=>{
      if(error.response.status==404)
        setMessage({message:` ${error.response.data.message} already deleted `,ec:1})
      else
        setMessage({message:"data can't be fetched",ec:"0"})
    })
  }
  const handlerDelete=(id)=>{
    deleteCarouselById(id);
  }

  const handlerUpdate=(id,carousel)=>{
    
    setUpdateId(id);
    setUpdateCarousel(carousel)
    setUpdateBox(true);

  }

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUpdateCarousel({...updateCarousel,[name]:value});
    // console.log(name,value)
}

const handlerSubmit = (event)=>{
    event.preventDefault();
    const {carouselLink}=updateCarousel;
    //validate here
    if(carouselLink.trim()==""){
      setMessage({message:"link must have some valid value",ec:1})
        return;
    }
    //call server here 
    carouselUpdateApiCall(updateId,updateCarousel).then((resp)=>{
        // console.log(resp);
        setMessage({message:`carousel is successfully updated with ID ${resp.carouselId}`,ec:0})
          setTimeout(()=>{
             setMessage({message:"",ec:0})},3000)

    }).catch((error)=>{
      console.error(error); //error to be tested 
      setMessage({message:"error occured ",ec:2})
    })
}

const handlerReset=()=>{
    setUpdateCarousel({carouselComment:"",carouselAlt:"",carouselLink:""})
}
  return (
    <>
      <div className='main-element'>

        <h3 className='form-heading'> delete carousel</h3>
        <table>
          <thead>
            <tr>
              <th> Serial No </th>
              <th> Carousel Id </th>
              <th> caption </th>
              <th> delete </th>
              <th> update </th>
            </tr>
          </thead>
          <tbody>
            {
              carouselList!=null? carouselList.map((carousel,idx)=>{
                  const {carouselId,carouselComment}=carousel;
                  return (<tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{carouselId}</td><td>{carouselComment}</td>
                    <td><button className='leaf-btn delete-btn' onClick={()=>handlerDelete(carouselId)}>Delete</button></td>
                    <td><button className='leaf-btn update-btn' onClick={()=>handlerUpdate(carouselId,carousel)}> Update </button></td>
                  </tr>)
              }):<tr><td>loading ...</td><td>{message.message}</td></tr>
            }
          </tbody>
        </table>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
      </div>

      {/* updating logic */}

    <>{!updateBox?null:
      <div id='item-dash'>
      
        <h3 className='form-heading'> Update Carousel </h3>
        <button className='leaf-btn close-btn ' style={{float:"right",padding:"6px",margin:"12px"}}  onClick={()=>{
          setUpdateBox(false);
        }}> close </button>
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
                  value={updateCarousel.carouselComment}
              />
              <br />
              <br />

              <label htmlFor='carouselAlt'> Carousel Alternative : </label>
              <input
                  type="text"
                  placeholder='Enter carousel alternative'
                  id='carouselAlt'
                  name='carouselAlt'
                  onChange={(e)=>handleChange(e)}
                  value={updateCarousel.carouselAlt}
              />
              <br />
              <br />

              <label htmlFor='carouselLink'> Carousel Drive Link </label>
              <input
                  type="text"
                  placeholder='Enter carousel Drive Link'
                  id='carouselLink'
                  name='carouselLink'
                  onChange={(e)=>handleChange(e)}
                  value={updateCarousel.carouselLink}
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
    }
      </>
    </>
  )
}

export default DeleteCarousel
