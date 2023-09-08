import React, { useEffect, useState } from 'react'
import { categoryGet, gelleryGetByCategory } from '../../crud/UserService';


const GetAllImageByCategory = () => {

  const [message,setMessage]=useState("");
  const [categoryList,setCategoryList]=useState();
  const [cId,setCId]=useState(0);
  const[cName,setCName]=useState("");
  const[galleryList,setGalleryList]=useState();
  const[para,setPara]=useState("");

  useEffect(()=>{
     categoryGet().then((resp)=>{
      setCategoryList(resp)
      setMessage({message:`please select a category`,ec:1})
    }).catch((error)=>{
      setMessage({message:` ${error.message} data can't be fetched `,ec:2})
    });
  },[])

  const handleChange=(event)=>{
    const {name,value}=event.target;
    // if(name=="galleryCategory")
       setCName(value);
    
    categoryList && categoryList.map(({categoryId,categoryName},idx)=>{
      if(value===categoryName){
        setCId(categoryId)
        return;
      }
    })
    
  }


  const handlerSubmit=(e)=>{
    e.preventDefault();
    if(cId==null  || cId==undefined){
      setMessage({message:`please select a valid category`,ec:1})
      return ;
    }
    //call server
    gelleryGetByCategory(cId).then((resp)=>{
      setGalleryList(resp)
      setMessage({message:`data is fetched successfully !!`,ec:0})
      setPara(cName);
    }).catch((error)=>{
      setMessage({message:` ${error.message} data can't be fetched `,ec:2})
    })
  }

  return (
    <>
    <div id="item-dash">
    <h3 className='form-heading'> Find Images of a category </h3>
     <hr />
    <div className='main-form'>
    <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
    <label htmlFor='galleryCategory'> select category : </label>
    <select
        name="galleryCategory"
        id="galleryCategory" 
        onChange={(event)=>handleChange(event)}>
        value={cName}
        <option> select </option>
        {categoryList?categoryList.map((cate,idx)=>{
                return <option key={idx} > {cate.categoryName} </option>
        }):null}
    </select> 
  <br /><br />
    <div className='btn-container'><button className='leaf-btn submit-btn' type="submit"> SUBMIT </button> </div>
      </form>
  </div>
  <br />
  <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
    <div className='main-element'>
        <h3 className='form-heading' >Images of category : {para} </h3>
        <table>
            <thead>
                <tr>
                <th> Serial No </th>
                <th> Image Id </th>
                <th> caption </th>
                <th> Alt </th>
                <th> Drive link </th>
                <th> preview </th>
                </tr>

            </thead>
            <tbody>
            {
                
                galleryList!=null ? galleryList.map((gallery,idx)=>{
                    const {galleryId,galleryAlt,galleryCaption,galleryLink}=gallery;
                    return <tr key={idx}>
                        <td> {idx+1} </td>
                        <td> {galleryId}</td>
                        <td> {galleryCaption}</td>
                        <td> {galleryAlt}</td>
                        <td> {galleryLink} </td>
                    </tr>
                    
                }) : <tr><td>loading ... </td><td>{message.message}</td></tr>
            }
            </tbody>
        </table>
    </div>
    </div>
    </>
  )
}
export default GetAllImageByCategory
