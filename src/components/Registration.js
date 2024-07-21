import React, { useState } from 'react';


function Registration(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });

      const [registrationMessage, setRegistrationMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('newsapp-api-backend.vercel.app/registration', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.status === 200) {
            setRegistrationMessage("your data registration successfully:");
            window.location.href = '/login';
          }else if (response.status === 409) {
            setErrorMessage("Email is already registered.");
          }  
          else {
            setErrorMessage("Registration failed. Please try again later.");
          }
        } catch (error) {
          console.error('Error during registration:', error);
          setErrorMessage('Registration failed');
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
            {registrationMessage && <div className="success-message">{registrationMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    <div className="form-body">
        <div className="form-holder">
            <div className="form-content">
                <div className="form-items">
                    <h3>Registration</h3>
                    <p>Fill in the data below.</p>
                    <form className="requires-validation" novalidate method="POST" onSubmit={handleSubmit} >
                        <input className="form-control mb-3" type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange}/>

                        <input className="form-control mb-3" type="email" name="email" placeholder="E-mail Address" required  value={formData.email}  onChange={handleChange}/>

                        <input className="form-control mb-3" type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange}/>

                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label">I confirm that all data are correct</label>
                        </div>
                        <button id="submit" type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </body>
        </>
    );
}
export default Registration;
