// import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';




function App() {

  const apiKey = process.env.REACT_APP_NEWS_API
  
  const pagesize = 9
  
  const [progress,setProgress] = useState(0)

  const setprogress = (progress)=>{
    setProgress(progress)
  }

    return (
      <>
      <Router>
        
        <Navbar />
        <LoadingBar
        height={2}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route path="/"  element={<News setProgress={setprogress} apiKey={apiKey} key="general" pagesize={pagesize} country='in' category="general" />} />
          <Route path="/business"  element={<News setProgress={setprogress} apiKey={apiKey} key="business" pagesize={pagesize} country='in' category="business" />} />
          <Route path="/entertainment"  element={<News setProgress={setprogress} apiKey={apiKey} key="entertainment" pagesize={pagesize} country='in' category="entertainment" />} />
          <Route path="/health"  element={<News setProgress={setprogress} apiKey={apiKey} key="health" pagesize={pagesize} country='in' category="health" />} />
          <Route path="/science"  element={<News setProgress={setprogress} apiKey={apiKey} key="science" pagesize={pagesize} country='in' category="science" />} />
          <Route path="/sports"  element={<News setProgress={setprogress} apiKey={apiKey} key="sports" pagesize={pagesize} country='in' category="sports" />} />
          <Route path="/technology"  element={<News setProgress={setprogress} apiKey={apiKey} key="technology" pagesize={pagesize} country='in' category="technology" />} />
        </Routes>
      </Router>
      </>
    );
}
export default App;