import { useEffect, useState, useRef } from "react";
import Button from "../subComponents/Button";
import Input from "../subComponents/Input";
import Instructions from "../subComponents/Instructions";

const inputText = Object.freeze({
  userName: 'Username',
  pwd: 'Password',
  confirmPwd: 'Confirm password'
});

const Register = () => {

  const userRef = useRef();
  const pwdRef = useRef();

  const USER_REGEX = /^[A-z][A-z0-9-_\.]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [user, setUser] = useState('');
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [match, setMatch] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    // userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUser(USER_REGEX.test(user))
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === match ? true : false);
  }, [pwd, match]);

  return (
    <section className="container d-flex align-items-center justify-content-center">
      <div className="row col-11 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-white main-title mt-5 mb-5" >Things to be <span className="text-secondary">done</span></h1>
            <div className="card mb-5 col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
              <form>
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
