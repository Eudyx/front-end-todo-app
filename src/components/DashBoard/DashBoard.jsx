import React from 'react'
import NewBoardSection from '../NewBoardSection/NewBoardSection'
import MyBoards from '../MyBoards/MyBoards'

const DashBoard = () => {
  return (

    <section className='container p-4 p-xl-0'>
        <NewBoardSection />
        <MyBoards />
    </section>
  )
}

export default DashBoard
