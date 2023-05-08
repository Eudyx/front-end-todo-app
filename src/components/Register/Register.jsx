import { useEffect, useState, useRef } from "react";
import Button from "../subComponents/Button";
import Input from "../subComponents/Input";
import Instructions from "../subComponents/Instructions";
import axios from "../../api/axios";

const REGISTER_URL = '/register';
const USER_REGEX = /^[A-z][A-z0-9-_\.]{3,23}$/;
const NAME_REGEX = /^[A-Z][A-z ]{3,50}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

const inputText = Object.freeze({
  userName: 'Username',
  pwd: 'Password',
  confirmPwd: 'Confirm password',
  email: 'Email',
  firstname: 'First name',
  lastname: 'Last name'
});

const Register = () => {

  const userRef = useRef();
  const pwdRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const lastNameRef = useRef();

  const [user, setUser] = useState('');
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [name, setName] = useState('')
  const [validName, setValidName] = useState(false)
  const [nameFocus, setNameFocus] = useState(false)

  const [lastName, setLastName] = useState('')
  const [validLastName, setValidLastName] = useState(false)
  const [lastNameFocus, setLastNameFocus] = useState(false)

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [match, setMatch] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUser(USER_REGEX.test(user));
    setValidEmail(EMAIL_REGEX.test(email));
    setValidName(NAME_REGEX.test(name));
    setValidLastName(NAME_REGEX.test(lastName));
  }, [user, email, name, lastName]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === match ? true : false);
  }, [pwd, match]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log('hola');
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({ user: user, email: email, firstname: name, lastname: lastName, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
      }
        );
        // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      setUser('');
      setPwd('');
      setMatch('');
      setEmail('');
      setName('');
      setLastName('');

  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
          setErrMsg('Username Taken');
      } else {
          setErrMsg('Registration Failed')
      }
  }
  }

  return (
    <section className="container d-flex align-items-center justify-content-center">
      <div className="row col-11 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-white main-title mt-5 mb-5" >Things to be <span className="text-secondary">done</span></h1>
            <div className="card mb-5 col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
              <form onSubmit={handleSubmit}>
                {errMsg?.length ? <p>{errMsg}</p> : null}
                <div className="card-body">
                    <h2 className="text-center text-info h4 m-0" >Register</h2>
                    <Input 
                      _ref={userRef}
                      id='user'
                      text={inputText.userName}
                      type='text'
                      focus={userFocus}
                      valid={validUser}
                      setFocusInput={setUserFocus}
                      content={user}
                      setContent={setUser}
                      />
                    <Instructions inputText={inputText} text={inputText.userName} focus={userFocus} valid={validUser} inputContent={user} />

                    <Input
                      _ref={emailRef}
                      id='email'
                      text={inputText.email}
                      type='email'
                      focus={emailFocus}
                      valid={validEmail}
                      setFocusInput={setEmailFocus}
                      content={email}
                      setContent={setEmail}
                    />

                    <Input
                      _ref={nameRef}
                      id='firstname'
                      text={inputText.firstname}
                      type='text'
                      focus={nameFocus}
                      valid={validName}
                      setFocusInput={setNameFocus}
                      content={name}
                      setContent={setName}
                    />

                    <Input
                      _ref={lastNameRef}
                      id='lastname'
                      text={inputText.lastname}
                      type='text'
                      focus={lastNameFocus}
                      valid={validLastName}
                      setFocusInput={setLastNameFocus}
                      content={lastName}
                      setContent={setLastName}
                    />
                    
                    <Input 
                      _ref={pwdRef}
                      id='password'
                      inputText={inputText}
                      text={inputText.pwd}
                      type='password'
                      focus={pwdFocus}
                      valid={validPwd}
                      setFocusInput={setPwdFocus}
                      content={pwd}
                      setContent={setPwd}
                      />
                    <Instructions inputText={inputText} text={inputText.pwd} focus={pwdFocus} valid={validPwd} inputContent={pwd} />
                    <Input
                      id='confirm-password'
                      inputText={inputText}
                      text={'Confirm password'}
                      type='password'
                      focus={matchFocus}
                      valid={validMatch}
                      setFocusInput={setMatchFocus}
                      content={match}
                      setContent={setMatch}
                      />
                    <Instructions inputText={inputText} text={inputText.confirmPwd} focus={matchFocus} valid={validMatch} inputContent={match} />
                  <br />
                <Button clsName='btn btn-primary text-white w-100'>
                  Create
                </Button>
                </div>
              </form>
            </div>
      </div>
    </section>
  )
}

export default Register
