import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Task from './pages/TaskPage';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
      <div className="menu">

          <div className = "nav">
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/tasks">Tasks</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li>  <Link to="/login"><button className='log-btn'> Login </button></Link> </li>
            <li>  <Link to="/signup"><button className='log-btn'> Signup </button></Link> </li>
          </ul>
          
          </div>
      </div>
      </header>
      
      
        <Routes>
          <Route exact path="/" element={<FirstPage/>}/>
          <Route exact path="/tasks" element={<Task/>}/>
          <Route exact path="/messages" element={<SecondPage/>}/>
          <Route exact path="/about" element={<ThirdPage/>}/>
          <Route exact path='/login' element= {<Login/>}/>
          <Route exact path='/signup' element= {<Signup/>} />
          </Routes>
        </div>
        </div>
  );
}

export default App;
