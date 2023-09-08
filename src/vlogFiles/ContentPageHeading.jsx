import React from 'react'

import './ContentPageHeading.css'

// import AboutMain from './AboutMain';


const ContentPageHeading = ({obj}) => {

  console.log(obj);

  const {bgimgsrc,heading,...newObj}=obj;
  
  const histroyBgStyle={
    backgroundImage: `url(${bgimgsrc})`,
    backgroundRepeat:' no-repeat',
    backgroundPosition: `50% 70%`,/*0 70 */
    backgroundSize: 'cover',
    padding:'60px 0' ,
    width:'100%',
  }

  return (
    <>
      <div id="section-bradcrum"  style={histroyBgStyle} className='historybg'  >
        <div className="containera">
          <div className="rowa">
            <div className="columna">
              <h1 className="h1-brandcrum">
                {heading}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <AboutMain  data={newObj}/> */}

    </>
  )
}

export default ContentPageHeading
