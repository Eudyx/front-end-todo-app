import './App.css'
// import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';

function App() {

  const inputText = Object.freeze({
    userName: 'Username',
    pwd: 'Password',
    confirmPwd: 'Confirm password',
    email: 'Email',
    firstname: 'First name',
    lastname: 'Last name'
  });

  return (
    <main>
      {/* <Register inputText={inputText} /> */}
      <LogIn inputText={inputText} />
    </main>  
  )
}

export default App
