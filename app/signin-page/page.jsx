// components/SignIn.js
'use client'
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../signup-page/firebase';

const auth = getAuth(app);


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const singInUser = () => {
    signInWithEmailAndPassword(auth, email, password).then((val)=>{
      setSubmitted(true)
      alert('sign in succesfull')
      window.location.href = '/joblistings'
    })
    
  };

  return (
    <div className="container mx-auto mt-8">
      <a href="/" className='redirect-btn'>Home</a>
      <a href="/signup-page" className='redirect-btn'>Sign Up</a>
      <h1 className="font-bold mb-4 signup-heading text-center mt-10">Sign In</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4 flex justify-center">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sign-input-tags"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" required
        />
      </div>
      <div className="mb-4 flex justify-center">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sign-input-tags"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password" required
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none sign-input-tags"
          onClick={singInUser}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
