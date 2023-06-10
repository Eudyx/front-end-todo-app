import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white p-2 mb-5 justify-content-start'>
      <div className="container">
          <div className='row d-flex align-items-center'>
            <img src='user.svg' className='p-0' style={{height: "40px", width: "40px"}} />
            <h1 className='h5 col-6 mb-0 fw-bold text-info' >Eudys Collado</h1>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
