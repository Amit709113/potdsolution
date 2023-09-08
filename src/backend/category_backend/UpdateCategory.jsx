import React, { useState } from 'react'
import { categoryPost, categoryPut } from '../../crud/UserService';

const UpdateCategory = ({cId,cgy,closeFn,messageSetter}) => {

  const [category,setCategory]=useState(cgy);
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setCategory({...category,[name]:value})
  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {categoryName}=category;

    //validate
    if(categoryName.trim()==""){
      messageSetter("name feild must have some value",1)
      return;
    }

    //call server
    categoryPut(cId,category).then((resp)=>{
      // console.log(resp);
      messageSetter(`category with name ${resp.categoryName} is successfully updated `,0);
      closeFn();
    }).catch((error)=>{
      console.log(error);
      messageSetter("error to be fixed for what and when to t",2)
    })
  }

  const handlerReset=()=>{
    setCategory({categoryName:"",categoryAbout:""})
  }


  return (
    <>
    <div id='item-dash'>
      
      <h3 className='form-heading'> update category </h3>
      <button className='close-btn leaf-btn' style={{float:"right",padding:"6px",margin:"12px"}}  onClick={()=>{
          closeFn()
        }}> close </button>

      <hr />
      <div className='main-form'>
        <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
            <label htmlFor='categoryName'>Category Name : </label>
            <input
                type="text"
                placeholder='Enter category '
                id='categoryName'
                name='categoryName'
                onChange={(e)=>handleChange(e)}
                value={category.categoryName}
            />
            <br /> <br />
            <label htmlFor='categoryAbout'>About : </label>
            <textarea 
            placeholder='2 lines about category '
            rows={5}
            cols={25}
            id="categoryAbout"
            name='categoryAbout'
            value={category.categoryAbout}
            onChange={(e)=>handleChange(e)}> </textarea>
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

export default UpdateCategory
