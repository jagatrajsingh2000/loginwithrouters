import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const getLocalData = () => {
  const lists = localStorage.getItem("mylist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
}
const Login = () => {
  const [emaillogin, setEmaillogin] = useState("");
  const [passwordlogin, setPasswordlogin] = useState("");
  const [list, setList] = useState(getLocalData);
  const navigate=useNavigate()
  const checkidpw = (id, password) => {
    if(list.find((curElem) => curElem.id === id && curElem.password === password)) {
        console.log(alert(" match done"));
        localStorage.setItem("logedin",true)
        setEmaillogin('')
        setPasswordlogin('')
        navigate('/')
      
    };
  };
  return (
    <>
      <div className="main-div">
        <h1>login-page</h1>
        <div className="form-button">
          <form
            id="edit-submit-login"
            className='edit-submit-login1'
            onSubmit={(e) => {
              e.preventDefault();
              checkidpw(emaillogin,passwordlogin)
              
            }}
          >
            <label  htmlFor="email1" className="label">E-mail</label>
            <br />
            <input className="input-box"
              id="email1"
              placeholder="Email@xyz.com"
              type={"email"}
              value={emaillogin}
              onChange={(e) => {
                setEmaillogin(e.target.value);
              }}
            ></input>
            <br />
            <label htmlFor="pw1" className="label">Password</label>
            <br />
            <input className="input-box"
              id="pw1"
              type={"password"}
              placeholder="password"
              value={passwordlogin}
              onChange={(e) => {
                setPasswordlogin(e.target.value);
              }}
            ></input>
          </form>
          <button className="button-submit" form="edit-submit-login">submit</button>
          <button className="button-submit" onClick={()=>navigate('/Register')}>sign-up</button>

          
        </div>
      </div>
    </>
  )
}

export default Login
