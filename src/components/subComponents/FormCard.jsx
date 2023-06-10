import React from 'react'

const FormCard = ({ children }) => {
  return (
    <div className="card mb-5 col-12 col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
      {children}
    </div>
  )
}

export default FormCard
