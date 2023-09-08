import React from 'react'
import { myAxios,REG_URL,LOGIN_URL, NOTICE_URL,CAROUSEL_URL, myAxiosToken,TOPPER_URL,CATEGORY_URL,GALLERY_URL,USER_URL } from './Helper'  //removing TOPPER_URL url from here add it 
// const TOPPER_URL=`https://dps-backend-production.up.railway.app/api/topper/`
export const signUp=(user)=>{
    return myAxios.post(REG_URL,user).then((response) => response.data)
}

export const logIn=(user)=>{

  return myAxios.post(LOGIN_URL,user).then((response)=>response.data);
  //{name:user.password,email:user.username}

}

//create notice
export const noticePost=(notice)=>{
  const newNotice={
    ...notice,
    author:notice.noticeAuthor
  }
  return myAxiosToken.post(NOTICE_URL,newNotice).then((response)=>response.data);
}

//getting all notice
export const noticeGet=()=>{
  return myAxiosToken.get(NOTICE_URL).then((resp)=>resp.data);
}

//delete notice
export const noticeDelete=(id)=>{
  return myAxiosToken.delete(`${NOTICE_URL}${id}`).then((resp)=>resp.data);
}

//update notice by id 
export const noticeUpdateApiCall=(id,notice)=>{
  const newNotice={
    ...notice,
    author:notice.noticeAuthor
  }
  return myAxiosToken.put(`${NOTICE_URL}${id}`,newNotice).then((resp)=>resp.data);
}




//create carousel
export const carouselPost=(carousel)=>{
  return myAxiosToken.post(CAROUSEL_URL,carousel).then((response)=>response.data);
}

//getting all carousel
export const carouselGet=()=>{
  return myAxiosToken.get(CAROUSEL_URL).then((resp)=>resp.data);
}

//delete carousel
export const carouselDelete=(id)=>{
  return myAxiosToken.delete(`${CAROUSEL_URL}${id}`).then((resp)=>resp.data);
}

//update carousel by id 
export const carouselUpdateApiCall=(id,carousel)=>{
  
  return myAxiosToken.put(`${CAROUSEL_URL}${id}`,carousel).then((resp)=>resp.data);
}


//create topper
export const topperPost=(topper)=>{
  return myAxiosToken.post(TOPPER_URL,topper).then((response)=>response.data);
}

//getting all topper
export const topperGet=()=>{
  return myAxiosToken.get(TOPPER_URL).then((resp)=>resp.data);
}

//delete topper
export const topperDelete=(id)=>{
  return myAxiosToken.delete(`${TOPPER_URL}${id}`).then((resp)=>resp.data);
}

//update topper by id 
export const topperPut=(id,topper)=>{
  
  return myAxiosToken.put(`${TOPPER_URL}${id}`,topper).then((resp)=>resp.data);
}

//create category
export const categoryPost=(category)=>{
  return myAxiosToken.post(CATEGORY_URL,category).then((response)=>response.data);
}

//getting all category
export const categoryGet=()=>{
  return myAxiosToken.get(CATEGORY_URL).then((resp)=>resp.data);
}

//delete category
export const categoryDelete=(id)=>{
  return myAxiosToken.delete(`${CATEGORY_URL}${id}`).then((resp)=>resp.data);
}

//update category by id 
export const categoryPut=(id,category)=>{
  
  return myAxiosToken.put(`${CATEGORY_URL}${id}`,category).then((resp)=>resp.data);
}


//create gallery
export const galleryPost=(gallery)=>{
const {galleryCaption,galleryAlt,galleryLink,galleryCategory} = gallery;
const newGallery={galleryCaption,galleryAlt,galleryLink}

  return myAxiosToken.post(`${GALLERY_URL}category/${galleryCategory}`,newGallery).then((response)=>response.data);
}

//getting all gallery
export const galleryGet=()=>{
  return myAxiosToken.get(GALLERY_URL).then((resp)=>resp.data);
}

//delete gallery
export const galleryDelete=(id)=>{
  return myAxiosToken.delete(`${GALLERY_URL}${id}`).then((resp)=>resp.data);
}

//not requried
//update gallery by id 
export const galleryPut=(id,gallery)=>{
  
  return myAxiosToken.put(`${GALLERY_URL}${id}`,gallery).then((resp)=>resp.data);
}

//get all image by category 
export const gelleryGetByCategory=(categoryId)=>{
  return myAxiosToken.get(`${GALLERY_URL}category/${categoryId}`).then((resp)=>resp.data);
}

//create user
export const userPost=(user)=>{
  return myAxiosToken.post(USER_URL,user).then((response)=>response.data);
}

//getting all user
export const userGet=()=>{
  return myAxiosToken.get(USER_URL).then((resp)=>resp.data);
}

//delete user
export const userDelete=(id)=>{
  return myAxiosToken.delete(`${USER_URL}${id}`).then((resp)=>resp.data);
}

//update user by id 
export const userPut=(id,user)=>{
  return myAxiosToken.put(`${USER_URL}${id}`,user).then((resp)=>resp.data);
}
