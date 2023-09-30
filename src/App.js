// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

<<<<<<< HEAD
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
// import NewsApp from './components/NewsApp';
=======


>>>>>>> 931de3b0e6a2b0ee566fc950b4af1a34d6bd1db2

function App() {
  const apiKey = 'd64fdab97ea344518da0ab7cf72bd6a6';
   const pagesize = 9;
   const [progress,setProgress] = useState(0);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const setprogress = (progress)=>{
     setProgress(progress)
   }
   const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn && <Navbar />}
                    <LoadingBar
                        height={2}
                        color='#f11946'
                        progress={progress}
                    />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/registration" element={<Registration />} />
                        <Route path="/general"  element={<News setProgress={setprogress} apiKey={apiKey} key="general" pagesize={pagesize} country='in' category="general" />} />
                        <Route path="/business"  element={<News setProgress={setprogress} apiKey={apiKey} key="business" pagesize={pagesize} country='in' category="business" />} />
                        <Route path="/entertainment"  element={<News setProgress={setprogress} apiKey={apiKey} key="entertainment" pagesize={pagesize} country='in' category="entertainment" />} />
                        <Route path="/health"  element={<News setProgress={setprogress} apiKey={apiKey} key="health" pagesize={pagesize} country='in' category="health" />} />
                        <Route path="/science"  element={<News setProgress={setprogress} apiKey={apiKey} key="science" pagesize={pagesize} country='in' category="science" />} />
                        <Route path="/sports"  element={<News setProgress={setprogress} apiKey={apiKey} key="sports" pagesize={pagesize} country='in' category="sports" />} />
                        <Route path="/technology"  element={<News setProgress={setprogress} apiKey={apiKey} key="technology" pagesize={pagesize} country='in' category="technology" />} />

      </Routes>
    </Router>
  );
}

export default App;
