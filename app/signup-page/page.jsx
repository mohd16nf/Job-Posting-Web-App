'use client';

import { useState } from 'react';
import app from './firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSubmitted(true);
        window.location.href = '/signin-page'
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <a href="/" className='redirect-btn'>Home</a>
      <a href="/signin-page" className='redirect-btn'>Sign In</a>
      <h1 className="font-bold mb-4 text-center mt-20 mb-10 signup-heading">Sign Up</h1>
      {!submitted ? (
        <form>
          <div className="mb-4 flex justify-center">
            <input 
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sign-input-tags"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email" required
            />
          </div>
          <div className="mb-4 flex justify-center">
            <input
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sign-input-tags"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter your password" required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-600 focus:outline-none sign-input-tags"
              type="button"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-lg text-green-500">Thank you for signing up!</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SignUp;
