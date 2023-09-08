import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { categoryGet, galleryPost } from '../../crud/UserService';

const UploadImage = () => {
    const navigator=useNavigate();
    const [gallery,setGallery]=useState({galleryCaption:"",galleryAlt:"",galleryLink:"",galleryCategory:""})
    const [message,setMessage]=useState({message:"",ec:0});
    const [categoryList,setCategoryList]=useState();


    useEffect(()=>{
        //get all category
        categoryGet().then((resp)=>{
            setCategoryList(resp)
            setMessage({message:`category is fetched `,ec:0});

        }).catch((error)=>{
            setMessage({message:` ${error.message} data can't be fetched `,ec:2})
        });
    },[])

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setGallery({...gallery,[name]:value});
    }
    const handlerSubmit = (event)=>{
        event.preventDefault();
        const {galleryLink,galleryCategory}=gallery;
        //validate here
        if(galleryLink.trim()=="" ){
            setMessage({message:"link and alternative must have some value ",ec:1})
            return;
        }
        //call server here 
        if(galleryCategory==0) {
            setMessage({message:`please select any one category `,ec:1})
            return ;
        }
        galleryPost(gallery).then((resp)=>{
            console.log(resp);
            setMessage({message:`Image is successfully added on category ${gallery.galleryCategory} with image id : ${resp.galleryId}`,ec:0});

        }).catch((error)=>{
            console.log(error);  //fix when what type of error 
            setMessage({message:"error to be fixed when what type ",ec:2})
    })
    }

    const handlerReset=()=>{

        setGallery({galleryCaption:"",galleryAlt:"",galleryLink:""})
    }



  return (
    <>
    <div id='item-dash'>      
      <h1 className='form-heading'> UPLOAD Image </h1>
      <hr />
      <div className='main-form'>
        <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
            <label htmlFor='galleryCaption'> gallery Caption </label>
            <input
                type="text"
                placeholder='Enter image caption'
                id='galleryCaption'
                name='galleryCaption'
                onChange={(e)=>handleChange(e)}
                value={gallery.galleryComment}
            />
            <br />
            <br />

            <label htmlFor='galleryAlt'> gallery Alternative : </label>
            <input
                type="text"
                placeholder='Enter gallery alternative'
                id='galleryAlt'
                name='galleryAlt'
                onChange={(e)=>handleChange(e)}
                value={gallery.galleryAlt}
            />
            <br />
            <br />

            <label htmlFor='galleryLink'> Image Drive Link </label>
            <input
                type="text"
                placeholder='Enter Image Drive Link'
                id='galleryLink'
                name='galleryLink'
                onChange={(e)=>handleChange(e)}
                value={gallery.galleryLink}
            />
            <br />
            <br />


            <label htmlFor='galleryCategory'> select category : </label>
                <select
                    name="galleryCategory"
                    id="galleryCategory" 
                    onChange={(event)=>handleChange(event)}>
                    value={gallery.galleryCategory}
                    <option> select </option>
                    {categoryList?categoryList.map((cate,idx)=>{
                            return <option key={idx} > {cate.categoryId} </option>
                    }):null}
                </select> 
            <br /> <br />
            <div className='btn-container'>
              <button className='leaf-btn submit-btn' type="submit"> SUBMIT </button>
              <button  className='leaf-btn reset-btn' type="reset">RESET</button>
            </div>

            
        </form>
        </div>
        <br />
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
      </div>
    </>
  )
}

export default UploadImage
