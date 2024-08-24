import React from 'react'
import { useState } from "react"
//signup and login

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., call an API)
    console.log('Login:', { email, password });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., call an API)
    console.log('Sign Up:', { email, password });
  };
  

  return (
    <div className='Login' style={styles.container}>
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={isSignUp ? handleSignUpSubmit : handleLoginSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <p style={styles.switchText}>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={() => setIsSignUp(!isSignUp)} style={styles.switchButton}>
          {isSignUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );


  //adding style 

}
const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputContainer: {
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginTop: '5px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    switchText: {
      marginTop: '15px',
    },
    switchButton: {
      background: 'none',
      border: 'none',
      color: '#007BFF',
      cursor: 'pointer',
    },
  };

export default Login