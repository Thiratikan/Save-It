import React, { useState, useRef, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
function Register() {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // setting the focus when the component loads, will set the focus on user input by userRef to ref the input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // will apply to the user name
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  //userEffects for the password

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);

    // comparing password to the matched password state
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  // if user pwd and matchPwd changed then error massage will be clear up
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      {/* what wil hold the error when the error happens */}
      {/* errorRef use useRef */}
      {/* if the error mesage exist (using errMsg ? then it will return to err statement by say "errMsg" then will apply offscreen class, didin't show none but it will take oof the screem )
       */}
      {/* aria-live is set toassertive means we set the focus on the element that has the ref uf errorRef. it will be announced to the screen reader when the error exist */}
      <p
        ref={errorRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Register</h1>
      <form>
        {/* htmlFor is linked to id  htmlFor should match id on iput*/}
        <label htmlFor="userName">
          Username:
          <FontAwesomeIcon
            icon={faCheck}
            className={validName ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validName || !user ? "hide" : "invalid"}
          />
        </label>
        <input
          type="text"
          id="userName"
          // ref={userRef} will allow to set focus on input
          ref={userRef}
          //turn off auto suggestion off because this is a register field
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          //if thiere is a valid name, it will set to false
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        {/* if user focus is true and user exist and not empty and also not a valid name
        if there something come up the instruction will show up */}
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, hyphens are allowed.
        </p>
      </form>
    </section>
  );
}

export default Register;
