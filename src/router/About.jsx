import React from 'react'
import AboutMain from '../vlogFiles/AboutMain'

import GoToTop from './GoToTop'

//data
import obj from '../data/AboutMainData.json'

const About = () => {
  return (
    <>
      <AboutMain data={obj.about} />
      <GoToTop />
    </>
  )
}

export default About
