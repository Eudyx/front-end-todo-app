
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

const Input = ({ 
  pHolder = "",
  text,
  id,
  type,
  inputText,
  userRef,
  pwdRef
    }) => {

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

  const instructions = (text) => {
    if(inputText) {
      return text === inputText.userName ? 
        <p id="uidnote" className={userFocus && user && !validUser ? "text-info" : "offScreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.<br />
          Must begin with a letter.<br />
          Letters, numbers, underscores, hyphens allowed.
        </p>
        : 
        text === inputText.pwd ? 
          <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? "text-info" : "offScreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.<br />
            Must include uppercase and lowercase letters, a number and a special character.<br />
            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </p>
          :
        text === inputText.confirmPwd ? 
          <p id="confirmnote" className={userFocus && confirmPwd && !validMatch   ? "text-info" : "offScreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p> : null
    }
  }

  useEffect(() => {
    setValidUser(USER_REGEX.test(user))
  }, [user]);


  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label mt-3 text-info">
        {text}
        {
          validUser && user && userFocus ?
          <FontAwesomeIcon className="text-success" icon={faCheck} />
          :
          !validUser && user && userFocus ?
          <FontAwesomeIcon className="text-danger" icon={faXmark} />
              : null
        }
      </label>
      <input
        ref={userRef}
        type={type}
        className="form-control"
        id={id}
        // aria-invalid={validMatch ? "false" : "true"}
        aria-describedby="confirmnote"
        placeholder={pHolder}
        value={user}
        onChange={(e) => setUser(e.target.value)}
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
        style={{height: '46px'}}
      />
      {instructions(text)}
    </div>
  );
};

export default Input;
