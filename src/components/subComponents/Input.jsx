import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const Input = ({ pHolder = "", text, id, type, _ref, valid, content, focus, setFocusInput, setContent }) => {

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label mt-3 text-info">
        {text}
        {
          valid && content && focus ?
          <FontAwesomeIcon className="text-success" icon={faCheck} />
          :
          !valid && content && focus ?
          <FontAwesomeIcon className="text-danger" icon={faXmark} />
              : null
        }
      </label>
      <input
        ref={_ref}
        type={type}
        className="form-control"
        id={id}
        aria-invalid={valid ? "false" : "true"}
        aria-describedby="confirmnote"
        placeholder={pHolder}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onFocus={() => setFocusInput(true)}
        onBlur={() => setFocusInput(false)}
        style={{height: '46px'}}
      />
    </div>
  );
};

export default Input;
