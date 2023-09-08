import React from 'react';
import OldCarousel from './OldCarousel';
import slide from '../data/carouselData.json'

const OldCarouselSlider=()=>{

    return(
        <>
           <div>
                <OldCarousel data={slide.slides} />
            </div>
        </>
    )
}
export default OldCarouselSlider;