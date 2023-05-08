import React from 'react'
import FormCard from '../subComponents/FormCard'
import Input from '../subComponents/Input'
import FormContainer from '../subComponents/FormContainer'
import Button from '../subComponents/Button'

const LogIn = ({ inputText }) => {
  return (
    <FormContainer>
      <h1 className="text-white main-title mt-5 mb-5" >Things to be <span className="text-secondary">done</span></h1>
      <FormCard>
        <form>
          <div className='card-body'>
          <Input
            pHolder={inputText.userName}
            text={inputText.userName}
            />
          <Input
            pHolder={inputText.pwd}
            text={inputText.pwd}
            />
            <a className='text-secondary'>
              Forgot your password
            </a>
            <br/>
            <br/>
            <Button className='btn btn-primary text-white w-100'>Log In</Button>
          </div>
        </form>
      </FormCard>
    </FormContainer>
  )
}

export default LogIn
