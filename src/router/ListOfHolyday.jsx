import React from 'react'
import GoToTop from './GoToTop'
import ListOfHolyDayMain from '../vlogFiles/ListOfHolyDayMain'
import obj from '../data/AcademicsData.json'

const ListOfHolyday = () => {
  return (
    <>
      <ListOfHolyDayMain data={obj.listofholyday} />
     <GoToTop />
    </>

  )
}

export default ListOfHolyday
