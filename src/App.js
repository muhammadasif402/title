import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import React, {useState} from 'react';
import Profile from './Profile';
import About from './component/About';
import Listing from './cmp/Listing';
import Home from './cmp/Home';
import Abouttt from './cmp/Abouttt';
import Auth from './cmp/Auth';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <div>
  <Navbar titile=" Title" mode={mode} toggleMode={toggleMode}/>
  <div className='container'>
  <Profile heading="Enter the text Below" mode={mode} />
  {/* <About/> */}
  </div>
    </div>
    );
}

export default App;