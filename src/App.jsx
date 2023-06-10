import './App.css'
// import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DashBoard from './components/DashBoard/DashBoard';

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
    <main className='main'>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="register" element={<Register inputText={inputText} />} />
          <Route path="login" element={<LogIn inputText={inputText} />} />
          <Route path="/" element={<DashBoard />} />
        </Route>
      </Routes>
      <img className='img-fluid position-fixed bottom-0 min-vh-100' id='background-img' src='background-img.jpg' />
    </main>  
  )
}

export default App
