import {useNavigate} from 'react-router-dom';

import React ,{ useState } from 'react';
import axios from "axios";



function Login(props){

    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const[password, setPassword]=useState('');
    const [errorMessage, setErrorMessage] = useState('');

   async function submit(e){
    e.preventDefault();

    try {
      await axios.post("newsapp-api-backend.vercel.app/login",{
        email,password
      })
      .then(res=>{
        if(res.data.status==="success"){
          props.onLogin();
          console.log('Navigating to /general');
          navigate('/general');
        }
        else if(res.data.status==="password"){

          setErrorMessage("password are wrong");

        }else if(res.data.status==="notexist"){
          setErrorMessage("user not found")
        }
      })
      .catch(e=>{
        setErrorMessage("wrong details");
        console.log(e);
      })

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

            {errorMessage && <div className="error-message">{errorMessage}</div>}
<div className="form-body">
<div className="form-holder">
    <div className="form-content">
        <div className="form-items">
            <h3>login</h3>
            <p>Fill in the data below.</p>
            <form className="requires-validation" noValidate method="POST">

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

        </>
    );
}

export default Login;
