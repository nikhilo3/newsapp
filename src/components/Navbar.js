import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
function Navbar({onLogout })  {
  const isLoggedIn = true; 

  const handleLogoutClick = () => {
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
          <Link className="navbar-brand" to="/general">Newsmonkey</Link>
=======
function Navbar()  {

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className='container-fluid'>
          <Link className="navbar-brand" to="/">Newsmonkey</Link>
>>>>>>> 9b336058f774fe3943f4166fd62c3c5fc2010c7f
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
<<<<<<< HEAD
                <Link className="nav-link" to="/general">general</Link>
=======
                <Link className="nav-link" to="/">general</Link>
>>>>>>> 9b336058f774fe3943f4166fd62c3c5fc2010c7f
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
<<<<<<< HEAD


              
              
            </ul>

            {isLoggedIn ? (
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
    
=======
            </ul>
          </div>
        </div>
      </nav>
    );
>>>>>>> 9b336058f774fe3943f4166fd62c3c5fc2010c7f
}

export default Navbar;
