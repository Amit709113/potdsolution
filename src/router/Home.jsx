import React from 'react'
import '../App.css'
import GoToTop from './GoToTop'

//working components import
import Carousel from '../components/Carousel';
import NoticeBox from '../components/NoticeBox';
import EventBox from '../components/EventBox';
import VlogList from '../components/VlogList';
import Topper from '../components/Topper';
import Testimonial from '../components/Testimonial';



//data import 
import data from '../data/carouselData.json';
import noticeData from '../data/noticeData.json'; 
import eventData from '../data/eventData.json'
import vlog from '../data/vlogData.json'
import topperData from '../data/topperData.json'
const Home = () => {
  return (
    <>
    <Carousel carouselData={data.slides} />
    <div className='notice-wrapper'>
      <NoticeBox notice={noticeData.noticeBoard}/>
      <EventBox event={eventData.eventData}/>
    </div>
    <VlogList data={vlog.articals}/>
    <Topper />
    <Testimonial testimonialData={topperData}/>
    <GoToTop />
      
    </>
  )
}

export default Home
