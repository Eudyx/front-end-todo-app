import React from 'react'

const FormContainer = ({ children }) => {
  return (
    <section className="container d-flex align-items-center justify-content-center">
      <div className="row col-11 d-flex flex-column align-items-center justify-content-center">
        {children}
        </div>
    </section>
  )
}

export default FormContainer
