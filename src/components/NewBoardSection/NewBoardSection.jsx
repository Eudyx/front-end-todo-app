import React from 'react'
import NewBoard from '../subComponents/NewBoard'
import CardBoard from '../subComponents/CardBoard'

const NewBoardSection = () => {
  return (
    <section className='row justify-content-between'>
        <div className='col-12 p-0 col-lg-2'>
            <h2 className='text-center fw-bold text-white'>New</h2>
            <div id='recentBoars'>
                <NewBoard />
            </div>
        </div>
        <div className='col-lg-10 p-0'>
            <h2 className='text-center fw-bold text-white'>Recent</h2>
            <div className='gap-3 gap-xl-2 justify-xl-content-center' id='recent'>
            <CardBoard>
                    New Board
                </CardBoard>
                <CardBoard>
                    New Board
                </CardBoard>
                <CardBoard>
                    New Board
                </CardBoard>
            </div>
        </div>
    </section>
  )
}

export default NewBoardSection
