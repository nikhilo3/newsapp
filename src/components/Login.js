import {useNavigate} from 'react-router-dom';

import React ,{ useState , useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';



function Login(props){

    const navigate = useNavigate();

    const [email,setEmail] = useState();
    const[password, setPassword]=useState('');


   async function submit(e){
    e.preventDefault();

    try {
      await axios.post("http://localhost:1000/login",{
        email,password
      })
      .then(res=>{
        if(res.data.status==="success"){
          props.onLogin();
          console.log('Navigating to /general');
          navigate('/general');
        }
        else if(res.data.status==="notexist"){
          alert('user not exist');
        }
      })
      .catch(e=>{
        alert("wrong detail")
        console.log(e);
      })


      // Make an API request to your Express server to validate credentials
      // const response = await fetch('/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // });

      // if (response.status === 200) {
      //   // Login successful, navigate to the news page
      //   navigate('/newsapp');
      // } else {
      //   // Login failed, display an error message
      //   console.log('Login failed');
      // }
    } catch (error) {
      console.log(error);
    }
  };
    
    return(
        <>
            <style>
                {`
                    .form-holder {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        background-color: #152733;
                        color: #fff;
                    }
                    
                    .form-content .form-items {
                        border: 3px solid #fff;
                        padding: 40px;
                        min-width: 540px;
                        border-radius: 10px;
                        transition: all 0.4s ease;
                    }
                    
                    .form-content h3 {
                        font-size: 28px;
                        font-weight: 600;
                        margin-bottom: 5px;
                    }
                    
                    .form-content p {
                        font-size: 17px;
                        font-weight: 300;
                        line-height: 20px;
                        margin-bottom: 30px;
                    }
                `}
            </style>

            <body>
<div className="form-body">
<div className="form-holder">
    <div className="form-content">
        <div className="form-items">
            <h3>login</h3>
            <p>Fill in the data below.</p>
            <form className="requires-validation" novalidate method="POST">

                <input className="form-control mb-3" type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="E-mail Address" required />

                <input className="form-control mb-3" type="password" onChange={(e)=>{setPassword(e.target.value)}} name="password" placeholder="Password" required />

                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label">I confirm that all data are correct</label>
                </div>
                <button id="submit" type="submit" className="btn btn-primary" onClick={(e)=>submit(e)}>login</button>
                
            </form>
        </div>
    </div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"></script>

</body>
        </>
    );
}

export default Login;