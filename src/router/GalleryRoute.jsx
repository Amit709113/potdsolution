import React from 'react'
import Gallery from '../components/Gallery.jsx'
import GoToTop from '../router/GoToTop.jsx'

import galleryData from '../data/galleryData.json'

const GalleryRoute = () => {
  return (
    <>
      <Gallery galleryData={galleryData.galleryData} />
      <GoToTop />
    </>
  )
}

export default GalleryRoute
