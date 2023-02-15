import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const getLocalData = () => {
  const lists = localStorage.getItem("mylist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState(getLocalData);
  const navigate=useNavigate()
  const listFunc = () => {
    if (list.find((userData) => userData.id === email)) {
      alert("already exist");
      setEmail("");
      setPassword("");
    } else {
      if (password != "") {
        const newData = {
          id: email,
          password: password,
        };
        setList([...list, newData]);
        setEmail("");
        setPassword("");
        navigate('/Login')
      }
    }
  };
  useEffect(() => {
    localStorage.setItem("mylist", JSON.stringify(list));
  }, [list]);
  return (
    <>
     <div className="main-div">
        <h1>signup-page</h1>
        <div className="form-button">
          <form
            id="edit-submit"
            className='edit-submit-login1'
            onSubmit={(e) => {
              e.preventDefault();
              
              console.log(alert("submit"));
              listFunc();
            }}
          >
            <label htmlFor="email" className="label">E-mail</label>
            <br />
            <input className="input-box"
              id="email"
              placeholder="   Email@xyz.com"
              type={"email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <br />
            <label htmlFor="pw" className="label">Password</label>
            <br />
            <input
              className="input-box"
              id="pw"
              type={"password"}
              placeholder="   password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </form>
          <button className="button-submit" form="edit-submit">submit</button>
          <button className="button-submit" onClick={()=>navigate('/Login')}>login</button>
        </div>
      </div>
    </>
  )
}

export default Register
