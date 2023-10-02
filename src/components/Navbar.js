import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({onLogout })  {
  const isLoggedIn = true; // Change this to reflect the user's login status

  const handleLogoutClick = () => {
    // Call the onLogout function when the Logout button is clicked
    onLogout();
  };
    return (
      <>
      <style>
          {`
            .btnl {
              background-color: #f00;
              color: red;
              padding: 10px 20px;
              margin-left: 10px;
              border: none;
              cursor: pointer;
              transition: background-color 0.3s ease-in-out;
              border-radius: 5px;
              
          }
  
          .btnl:hover {
              background-color: #c00;
          }
          `}
        </style>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className='container-fluid'>
          <Link className="navbar-brand" to="/">Newsmonkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/general">general</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">technology</Link>
              </li>


              
              {/* <Link className="btnl" to="/" style={{ textDecoration: 'none', color: 'white' , marginLeft:'750px'}}>Logout</Link> */}
              
            </ul>

            {isLoggedIn ? (
              // Display Logout button when logged in
              <button className="btnl" onClick={handleLogoutClick} style={{color:'white'}}>
                <Link style={{ textDecoration: 'none', color: '#ddd' }} to="/">Logout</Link>
              </button>
            ) 
            : null}
          </div>
        </div>
      </nav>
      </>
    );
    
}

export default Navbar;
