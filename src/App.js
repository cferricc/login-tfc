import { useState } from "react";
import './styles.css';
import ButtonPrimary from './ButtonPrimary'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='login'>
      <div className='login__header'>
        <div className='login__logo'>
        </div>
        <div className='login__language'>
        </div>
      </div>
      <div className='login__info'>
        <h1>Sign In</h1>
        <form className='login__form'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
    </div>
    </div>
  )
}

export default App