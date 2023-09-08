import React from 'react'
 
const AboutMainContent = ({reqData}) => {
    const {subHeading,contentImage,paraList,ulItemList}=reqData;
  return (
    <>
        <div className="content-start-column">
            <div className='rowa'>
                <div className="column-second">
                    <div className="inner-right">
                        <div className="rowa">
                            <div className="column-second">
                                <div className="inner-heading">
                                    <h2>{subHeading}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="inner-body">
                            <div className="rowa">

                                <div className='column-second'>
                                    <img src={contentImage} alt="images" width="100%" />
                                    {
                                        paraList.map((ele,idx)=> <p key={idx}>{ele} </p>)
                                    }
                                    <div className="last-column">
                                        <ul>
                                            { ulItemList.map((item,i)=><li key={i}> {item} </li>) }  
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMainContent
