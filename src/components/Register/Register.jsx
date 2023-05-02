import { useEffect, useState, useRef } from "react";
import Button from "../subComponents/Button";
import Input from "../subComponents/Input";

const inputText = Object.freeze({
  userName: 'Username',
  pwd: 'Password',
  confirmPwd: 'Confirm password'
});

const Register = () => {

  const userRef = useRef();
  const pwdRef = useRef();

useEffect(() => {
  // userRef.current.focus();
}, []);

  return (
    <section className="container d-flex align-items-center justify-content-center">
      <div className="row col-11 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-white main-title mt-5 mb-5" >Things to be <span className="text-secondary">done</span></h1>
            <div className="card mb-5 col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
              <form>
                <div className="card-body">
                    <h2 className="text-center text-info h4 m-0" >Register</h2>
                    <Input inputText={inputText} userRef={userRef} id='user' text={inputText.userName} type='text'  />
                    <Input id='password' pwdRef={pwdRef} inputText={inputText} text={inputText.pwd} type='password' />
                    <Input id='confirm-password' inputText={inputText} text={'Confirm password'} type='password' />
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
