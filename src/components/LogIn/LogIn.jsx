import React, { useEffect, useRef, useState } from 'react'
import FormCard from '../subComponents/FormCard'
import Input from '../subComponents/Input'
import FormContainer from '../subComponents/FormContainer'
import Button from '../subComponents/Button'
import { useDispatch, useSelector } from 'react-redux';
import { getToken, auth1 } from '../../features/authSlice';
import axios from '../../api/axios'
import { Link } from 'react-router-dom'

const LOGIN_URL = '/login'

const LogIn = ({ inputText }) => {

  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [msgError, setMsgError] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector(auth1);

  useEffect(() => {
    emailRef.current.focus();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          email,
          pwd
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      console.log(response.data.accessToken);
      setEmail('');
      setPwd('');
      setMsgError('');
    } catch (err) {
      if(!err?.response) {
        setMsgError('No server response');
      } else if(err.response?.status === 400) {
        setMsgError('Email and password are required');
      } else if(err.response?.status === 404) {
        setMsgError('The user doesn\'t exist');
      } else if(err.response?.status === 401) {
        setMsgError('Incorrect email or password');
      } else {
        setMsgError('Login failed')
      }
    }
  }

  return (
    <FormContainer>
      <h1 className="text-white main-title mt-5 mb-5" >Things to be <span className="text-secondary">done</span></h1>
      <FormCard>
        <form onSubmit={handleSubmit}>
          <div className='card-body'>
          {!msgError?.length ? null : <p className='text-danger'>{msgError}</p>}
          <Input
            _ref={emailRef}
            pHolder={inputText.email}
            text={inputText.email}
            type="text"
            content={email}
            setContent={setEmail}
            />
          <Input
            pHolder={inputText.pwd}
            text={inputText.pwd}
            type="password"
            content={pwd}
            setContent={setPwd}
            />
            <Button className='btn btn-primary mt-2 mb-3 text-white w-100'>Log In</Button>
            <div>
              <Link className='text-secondary text-decoration-none' to='/#' >Forgot your password</Link>
              <br />
              <Link className='text-secondary text-decoration-none' to='/register' >Create an acount</Link>
            </div>
          </div>
        </form>
      </FormCard>
    </FormContainer>
  )
}

export default LogIn
