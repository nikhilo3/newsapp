// App.js
import React, { useState,useEffect  } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  const apiKey = 'd64fdab97ea344518da0ab7cf72bd6a6';
   const pagesize = 9;
   const [progress,setProgress] = useState(0);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const setprogress = (progress)=>{
     setProgress(progress)
   }

   useEffect(() => {
    const userIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (userIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); 

    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button"; 

    window.onhashchange = function(){
        window.location.hash = "no-back-button";
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <Router>
      {isLoggedIn && <Navbar onLogout={handleLogout}/>}
                    <LoadingBar
                        height={2}
                        color='#f11946'
                        progress={progress}
                    />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/registration" element={<Registration />} />
                        <Route path="/general"  element={isLoggedIn && <News setProgress={setprogress} apiKey={apiKey} key="general" pagesize={pagesize} country='in' category="general" />} />
                        <Route path="/business"  element={isLoggedIn &&<News setProgress={setprogress} apiKey={apiKey} key="business" pagesize={pagesize} country='in' category="business" />} />
                        <Route path="/entertainment"  element={isLoggedIn &&<News setProgress={setprogress} apiKey={apiKey} key="entertainment" pagesize={pagesize} country='in' category="entertainment" />} />
                        <Route path="/health"  element={isLoggedIn &&<News setProgress={setprogress} apiKey={apiKey} key="health" pagesize={pagesize} country='in' category="health" />} />
                        <Route path="/science"  element={isLoggedIn &&<News setProgress={setprogress} apiKey={apiKey} key="science" pagesize={pagesize} country='in' category="science" />} />
                        <Route path="/sports"  element={isLoggedIn &&<News setProgress={setprogress} apiKey={apiKey} key="sports" pagesize={pagesize} country='in' category="sports" />} />
                        <Route path="/technology"  element={isLoggedIn &&<News setProgress={setprogress} apiKey={apiKey} key="technology" pagesize={pagesize} country='in' category="technology" />} />

      </Routes>
    </Router>
  );
}

export default App;
