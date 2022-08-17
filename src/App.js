import { useState, useEffect } from "react";
import './styles.css';
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import api from "./services/Api";

function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  console.log({user, password})

  useEffect(() => {
    api
      .get("/users")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className='login'>
      <div className='login__info'>
        <h1>Sign In</h1>
        <form className='login__form'>
          <label htmlFor='user'>Email Address</label>
          <input
            id='user'
            type='email'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          < ButtonPrimary name='Log In' type='submit' onClick={App}/>
        </form>
        <div className='login__divider'>
          <hr /> <span>OR</span> <hr />
    </div>
    <ButtonSecondary name='create account' />
    </div>
    </div>
  )
}

export default App