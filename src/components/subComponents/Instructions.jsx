import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Instructions = ({ text, inputText, focus, valid, inputContent }) => {
    const instructions = (text) => {
        if(inputText) {
          return text === inputText.userName ? 
            <p id="uidnote" className={focus && inputContent && !valid ? "text-info" : "offScreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            : 
            text === inputText.pwd ? 
              <p id="pwdnote" className={focus && inputContent && !valid ? "text-info" : "offScreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
              </p>
              :
            text === inputText.confirmPwd ? 
              <p id="confirmnote" className={focus && inputContent && !valid   ? "text-info" : "offScreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p> : null
        }
      }
  return (
    <>
        {instructions(text)}
    </>
  )
}

export default Instructions
