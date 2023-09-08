import React,{useState,useEffect} from 'react'
import GoToTop from './GoToTop'
import PostMethodChecker from '../backend/PostMethodChecker'
import PutMethodChecker from '../backend/PutMethodChecker'
import DeleteMethodChecker from '../backend/DeleteMethodChecker'
import NoticeDelete from '../backend/NoticeDelete'

const Testing = () => {
  return (
    <>
      {/* <PostMethodChecker /> */}
      {/* <PutMethodChecker /> */}
      {/* <DeleteMethodChecker /> */}
      <NoticeDelete />
      <GoToTop />
    </>
  )
}

export default Testing
